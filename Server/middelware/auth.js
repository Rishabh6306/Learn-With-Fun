// Import necessary libraries and modules
import jwt from 'jsonwebtoken'; // Import JWT for JSON Web Token handling
import dotenv from 'dotenv'; // Import dotenv for handling environment variables

// Load environment variables from a .env file
dotenv.config();

/** Authentication middleware */
export default async function Auth(req, res, next) {
    try {
        // Access the authorization header to validate the request
        const token = req.headers.authorization.split(" ")[1];

        // Verify the token and retrieve user details for the logged-in user
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Attach the user details to the request object
        req.user = decodedToken;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        // Handle authentication failure by sending a 401 Unauthorized response
        res.status(401).json({ error: "Authentication Failed!" });
    }
}

/** Middleware to set local variables */
export function localVariables(req, res, next) {
    // Set local variables in the app.locals object
    req.app.locals = {
        OTP: null, // Initialize OTP (One-Time Password) to null
        resetSession: false // Initialize resetSession to false
    };

    // Continue to the next middleware or route handler
    next();
}