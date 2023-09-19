// Import required libraries and modules
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import jwt for JSON Web Token handling
import dotenv from 'dotenv'; // Import dotenv for handling environment variables
import otpGenerator from 'otp-generator'; // Import otp-generator for generating OTPs
import AuthSchema from '../Models/AuthModels.js'; // Import the authentication schema model

// Load environment variables from a .env file
dotenv.config();

/** Verify user middleware */
export async function verifyUser(req, res, next) {
    try {
        // Determine the username based on the HTTP method (GET or other)
        const { username } = req.method === "GET" ? req.query : req.body;

        // Check if the user exists in the database
        const user = await AuthSchema.findOne({ username });

        // If the user doesn't exist, return a 404 error
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Authentication Error" });
    }
}

/** Register user controller */
export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check if the username already exists in the database
        const existingUsername = await AuthSchema.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Check if the email already exists in the database
        const existingEmail = await AuthSchema.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new AuthSchema({
            username,
            password: hashedPassword,
            profile: profile || '',
            email,
        });

        // Save the user to the database
        const savedUser = await user.save();

        // Return a success response with the saved user data
        return res.status(201).json({ msg: "User registered successfully", user: savedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

/** Login user controller */
export async function login(req, res) {
    const { username, password } = req.body;

    try {
        // Find the user in the database by username
        const user = await AuthSchema.findOne({ username });

        // If the user doesn't exist, return a 400 error
        if (!user) {
            return res.status(400).json({ error: "Username not found" });
        }

        // Check if the provided password matches the hashed password in the database
        const passwordCheck = await bcrypt.compare(password, user.password);

        // If the passwords don't match, return a 400 error
        if (!passwordCheck) {
            return res.status(400).json({ error: "Password does not match" });
        }

        // Create a JWT token for the user's authentication
        const token = jwt.sign({
            userId: user._id,
            username: user.username
        }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });

        // Return a success response with the token and username
        return res.status(200).json({
            msg: "Login Successful...!",
            username: user.username,
            token
        });

    } catch (error) {
        return res.status(500).json({ error });
    }
}

/** GET user by username controller */
export async function getUser(req, res) {
    const { username } = req.params;

    try {
        // Check for an empty username
        if (!username) {
            return res.status(501).json({ error: "Invalid Username" });
        }

        // Find the user in the database by username
        const user = await AuthSchema.findOne({ username });

        // If the user doesn't exist, return a 501 error
        if (!user) {
            return res.status(501).json({ error: "Couldn't Find the User" });
        }

        // Remove the password from the user data
        const { password, ...rest } = Object.assign({}, user.toJSON());

        // Return the user data without the password
        return res.status(200).json(rest);

    } catch (error) {
        return res.status(404).json({ error: "Cannot Find User Data" });
    }
}

/** Update user profile controller */
export async function updateUser(req, res) {
    try {
        const { userId } = req.user;

        // Check if a valid user ID is present
        if (userId) {
            const body = req.body;

            // Update the user data in the database
            await AuthSchema.updateOne({ _id: userId }, body);

            // Return a success response
            return res.status(200).json({ msg: "Record Updated...!" });
        } else {
            return res.status(401).json({ error: "User Not Found...!" });
        }

    } catch (error) {
        return res.status(401).json({ error });
    }
}

/** Generate OTP controller */
export async function generateOTP(req, res) {
    // Generate a 6-digit OTP
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });

    // Return the generated OTP in the response
    res.status(201).json({ code: req.app.locals.OTP });
}

/** Verify OTP controller */
export async function verifyOTP(req, res) {
    const { code } = req.query;

    // Check if the provided OTP matches the generated OTP
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null; // Reset the OTP value
        req.app.locals.resetSession = true; // Start session for reset password

        // Return a success response
        return res.status(201).json({ msg: 'Verify Successfully!' });
    }

    // If OTP doesn't match, return a 400 error
    return res.status(400).json({ error: "Invalid OTP" });
}

/** Check if reset session is active controller */
export async function createResetSession(req, res) {
    // Check if the reset session is active
    if (req.app.locals.resetSession) {
        return res.status(201).json({ flag: req.app.locals.resetSession });
    }

    // If reset session is not active, return a 440 error
    return res.status(440).json({ error: "Session expired!" });
}

/** Reset user password controller */
export async function resetPassword(req, res) {
    try {
        // Check if the reset session is active
        if (!req.app.locals.resetSession) {
            return res.status(440).json({ error: "Session expired!" });
        }

        const { username, password } = req.body;

        // Find the user in the database by username
        const user = await AuthSchema.findOne({ username });

        // If the user doesn't exist, return a 404 error
        if (!user) {
            return res.status(404).json({ error: "Username not Found" });
        }

        // Hash the new password before updating it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password in the database
        await AuthSchema.updateOne({ username: user.username }, { password: hashedPassword });

        // Reset the reset session
        req.app.locals.resetSession = false;

        // Return a success response
        return res.status(201).json({ msg: "Record Updated...!" });

    } catch (error) {
        return res.status(500).json({ error });
    }
}