import express, {json} from "express";
import dotenv from 'dotenv'
import cors from 'cors'

import db from './db.js'

const app = express();
app.use(json()).use(cors())

dotenv.config()

// CODIGO AQUI

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
})