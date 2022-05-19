import express, {json} from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieSession from "cookie-session"
import passport from "passport"


import userRouter from "./routes/usersRouter.js";
import cartRouter from "./routes/cartRouter.js";
import productsRouter from "./routes/productsRouter.js";


const app = express();
app.use(cookieSession({name: "session", keys: ["Saia De Filó"], maxAge: 24 * 60 * 60 * 100}));
app.use(passport.initialize());
app.use(passport.session());
app.use(json());
dotenv.config();
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(userRouter);
app.use(cartRouter);
app.use(productsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});