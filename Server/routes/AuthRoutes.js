// AuthRoutes.js
import { Router } from "express";
const authAuthRouter = Router();

import * as controller from '../controller/AuthController.js';
import { registerMail } from '../controller/Authmailer.js'
import Auth, { localVariables } from '../middelware/auth.js';

authAuthRouter.route('/register').post(controller.register);
authAuthRouter.route('/registerMail').post(registerMail);
authAuthRouter.route('/authenticate').post(controller.verifyUser, (req, res) => res.end());
authAuthRouter.route('/login').post(controller.verifyUser, controller.login);
authAuthRouter.route('/user/:username').get(controller.getUser);
authAuthRouter.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP);
authAuthRouter.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP);
authAuthRouter.route('/createResetSession').get(controller.createResetSession);
authAuthRouter.route('/updateuser').put(Auth, controller.updateUser);
authAuthRouter.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);

export default authAuthRouter;