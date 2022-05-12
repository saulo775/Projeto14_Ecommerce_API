import express, {json} from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import chalk from "chalk";

import db from './db.js'
import getAllProducts from "./controllers/homeController.js";

const app = express();
app.use(json()).use(cors())

dotenv.config()

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

app.get("/home", getAllProducts);



app.listen(process.env.PORT, () => {
    console.log(chalk.bold.green(`Server listening on ${process.env.PORT}`));
})