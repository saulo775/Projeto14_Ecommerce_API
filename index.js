import express, {json} from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieSession from "cookie-session"
import passport from "passport"


import userRouter from "./routes/usersRouter.js";
import cartRouter from "./routes/cartRouter.js";
import db from './db.js'
import {
    getAllProducts,
    getFeaturedProducts
} from "./controllers/productsController.js";

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

app.use(userRouter)
app.use(cartRouter)

app.post("/save-products", async (req, res)=>{
    const body = req.body;
    try {
        await db.collection("products").insertOne(body);
        return res.send(body);
    } catch (e) {
        console.log(e)
        res.status(422).send("Não foi possível cadastrar esse produto!");
    }
});

app.get("/products", getAllProducts);
app.get("/featured-products", getFeaturedProducts);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});