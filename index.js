import express, {json} from "express";
import dotenv from 'dotenv'
import cors from 'cors'

import userRouter from "./routes/usersRouter.js";

const app = express();
app.use(json());
app.use(cors());

dotenv.config();

app.use(userRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});