import db from "../db.js";

export async function AddCheckOut(req, res) {
    const chekout = req.body
 
    try {
        await db.collection("checkout").insertOne(chekout)
        res.status(200).send("Produto adicionado ao carrinho.")

    } catch (error) {
        return res.status(500).send("Erro ao adicionar produto.");
    }
}

export async function GetCheckOut(req, res) {
    try {
        const  {user}  = res.locals      
        const product = await db.collection("cart").find({userId: user._id.toString()}).toArray()
        console.log(product)
        res.send(product)

    } catch (error) {
        
        res.status(500).send("Erro ao buscar produto.")
    }
}

