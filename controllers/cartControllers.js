import { ObjectId } from "mongodb"
import db from "../db.js"

export async function AddShoppingCart(req, res) {
    const {data, userId} = req.body
 
    try {
        await db.collection("cart").insertOne({...data, userId})
        res.status(200).send("Produto adicionado ao carrinho.")

    } catch (error) {
        return res.status(500).send("Erro ao adicionar produto.");
    }
}

export async function GetShoppingCart(req, res) {
    try {
        const  {user}  = res.locals      
        const product = await db.collection("cart").find({userId: user._id.toString()}).toArray()
        console.log(product)
        res.send(product)

    } catch (error) {
        
        res.status(500).send("Erro ao buscar produto.")
    }
}

export async function DeleteShoppingCart(req, res) {
    const { productId } = req.params

    try {
        await db.collection("cart").deleteOne({ _id: new ObjectId(productId) })
        res.sendStatus(200)

    } catch (error) {
        res.status(500).send("Erro ao excluir produto.")
    }
}