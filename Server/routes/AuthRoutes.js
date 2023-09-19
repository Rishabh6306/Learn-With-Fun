// Import the Router from the Express library
import { Router } from "express";

// Create a new Router instance
const authAuthRouter = Router();

// Import necessary controllers and middleware
import * as controller from '../controller/AuthController.js';
import { registerMail } from '../controller/Authmailer.js'
import Auth, { localVariables } from '../middelware/auth.js';

// Define routes and their associated handlers
authAuthRouter.route('/register').post(controller.register); // Register a new user
authAuthRouter.route('/registerMail').post(registerMail); // Send registration confirmation email
authAuthRouter.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // Authenticate user
authAuthRouter.route('/login').post(controller.verifyUser, controller.login); // User login
authAuthRouter.route('/user/:username').get(controller.getUser); // Get user by username
authAuthRouter.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP); // Generate OTP for user
authAuthRouter.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP); // Verify OTP
authAuthRouter.route('/createResetSession').get(controller.createResetSession); // Create a reset password session
authAuthRouter.route('/updateuser').put(Auth, controller.updateUser); // Update user information
authAuthRouter.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // Reset user's password

// Export the authAuthRouter for use in other parts of the application
export default authAuthRouter;