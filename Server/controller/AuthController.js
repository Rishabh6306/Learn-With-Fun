import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import otpGenerator from 'otp-generator';
import AuthSchema from '../Models/AuthModels.js';


dotenv.config();


export async function verifyUser(req, res, next) {
    try {
        const { username } = req.method === "GET" ? req.query : req.body;

        // Check if the user exists
        const user = await AuthSchema.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Authentication Error" });
    }
}


/** Register user */
export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check if the username already exists
        const existingUsername = await AuthSchema.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Check if the email already exists
        const existingEmail = await AuthSchema.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new AuthSchema({
            username,
            password: hashedPassword,
            profile: profile || '',
            email,
        });

        // Save the user to the database
        const savedUser = await user.save();

        return res.status(201).json({ msg: "User registered successfully", user: savedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

/** Login user */
export async function login(req, res) {
    const { username, password } = req.body;

    try {
        const user = await AuthSchema.findOne({ username });

        if (!user) {
            return res.status(400).json({ error: "Username not found" });
        }

        const passwordCheck = await bcrypt.compare(password, user.password);

        if (!passwordCheck) {
            return res.status(400).json({ error: "Password does not match" });
        }

        // Create JWT token
        const token = jwt.sign({
            userId: user._id,
            username: user.username
        }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });

        return res.status(200).json({
            msg: "Login Successful...!",
            username: user.username,
            token
        });

    } catch (error) {
        return res.status(500).json({ error });
    }
}

// Rest of the controller functions

/** GET user by username */
export async function getUser(req, res) {
    const { username } = req.params;

    try {
        if (!username) {
            return res.status(501).json({ error: "Invalid Username" });
        }

        const user = await AuthSchema.findOne({ username });

        if (!user) {
            return res.status(501).json({ error: "Couldn't Find the User" });
        }

        // Remove password from user
        const { password, ...rest } = Object.assign({}, user.toJSON());

        return res.status(200).json(rest);

    } catch (error) {
        return res.status(404).json({ error: "Cannot Find User Data" });
    }
}

/** Update user profile */
export async function updateUser(req, res) {
    try {
        const { userId } = req.user;

        if (userId) {
            const body = req.body;

            // Update the data
            await AuthSchema.updateOne({ _id: userId }, body);

            return res.status(200).json({ msg: "Record Updated...!" });
        } else {
            return res.status(401).json({ error: "User Not Found...!" });
        }

    } catch (error) {
        return res.status(401).json({ error });
    }
}

/** Generate OTP */
export async function generateOTP(req, res) {
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    res.status(201).json({ code: req.app.locals.OTP });
}

/** Verify OTP */
export async function verifyOTP(req, res) {
    const { code } = req.query;
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null; // Reset the OTP value
        req.app.locals.resetSession = true; // Start session for reset password
        return res.status(201).json({ msg: 'Verify Successfully!' });
    }
    return res.status(400).json({ error: "Invalid OTP" });
}

/** Check if reset session is active */
export async function createResetSession(req, res) {
    if (req.app.locals.resetSession) {
        return res.status(201).json({ flag: req.app.locals.resetSession });
    }
    return res.status(440).json({ error: "Session expired!" });
}

/** Reset user password */
export async function resetPassword(req, res) {
    try {
        if (!req.app.locals.resetSession) {
            return res.status(440).json({ error: "Session expired!" });
        }

        const { username, password } = req.body;

        const user = await AuthSchema.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: "Username not Found" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await AuthSchema.updateOne({ username: user.username }, { password: hashedPassword });

        req.app.locals.resetSession = false; // Reset session
        return res.status(201).json({ msg: "Record Updated...!" });

    } catch (error) {
        return res.status(500).json({ error });
    }
}
