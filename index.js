import express, {json} from "express";
import cookieSession from "cookie-session"
import passport from "passport"
import dotenv from 'dotenv'
import cors from 'cors'

import userRouter from "./routes/usersRouter.js";
import cartRouter from "./routes/cartRouter.js";

const app = express();

app.use(cookieSession({name: "session", keys: ["Saia De Filó"], maxAge: 24 * 60 * 60 * 100}))

app.use(passport.initialize())
app.use(passport.session())

app.use(json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));


dotenv.config();

app.use(userRouter)
app.use(cartRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});