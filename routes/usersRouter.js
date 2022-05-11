import { Router } from "express";
import {SignIn, SignUp} from "./../controllers/usersControllers.js"

const userRouter = Router();

userRouter.post('/sign-up', SignUp);
userRouter.post('/sign-in', SignIn);

export default userRouter;