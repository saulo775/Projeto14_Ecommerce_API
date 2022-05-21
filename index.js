import express, {json} from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieSession from "cookie-session"
import passport from "passport"


import userRouter from "./routes/usersRouter.js";
import cartRouter from "./routes/cartRouter.js";
import productsRouter from "./routes/productsRouter.js";
import checkoutRouter from "./routes/checkoutRouter.js";


const app = express();
app.use(cors());
app.use(cookieSession({name: "session", keys: ["Saia De Filó"], maxAge: 24 * 60 * 60 * 100}));
app.use(passport.initialize());
app.use(passport.session());
app.use(json());
dotenv.config();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(checkoutRouter);
app.use(userRouter);
app.use(cartRouter);
app.use(productsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});