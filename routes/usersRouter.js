import { Router } from "express";
import {SignIn, SignUp} from "./../controllers/usersControllers.js"

import signUpSchema from "../middleware/signUpMiddelware.js";
import signInSchema from "../middleware/signInMiddleware.js";


const userRouter = Router();

userRouter.post('/sign-up', signUpSchema, SignUp);
userRouter.post('/sign-in', signInSchema, SignIn);

export default userRouter;