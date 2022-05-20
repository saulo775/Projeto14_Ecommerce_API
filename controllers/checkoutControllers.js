import db from "../db.js";

export async function AddCheckOut(req, res) {
    const chekout = req.body
   
    try {
        await db.collection("checkout").insertOne(chekout)
        return res.status(200).send("Produto adicionado ao carrinho.")

    } catch (error) {
        console.log(error)
        return res.status(500).send("Erro ao adicionar produto.");
    }
}

export async function DeleteShoppingCart(req, res) {
    const {id} = req.params
    console.log("entrou", id)       
    try {
        await db.collection("cart").deleteMany({userId: id})
        return res.sendStatus(200)

    } catch (error) {
        return res.status(500).send("Erro ao excluir produto.")
    }
}