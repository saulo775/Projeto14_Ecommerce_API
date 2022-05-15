import db from "../db.js"

export async function AddShoppingCart(req, res){
    const product = req.body
    
    try{
        await db.collection("cart").insertOne({product})
        res.status(200).send("Produto adicionado ao carrinho.")
    }catch (error){
        return res.status(500).send("Erro ao fazer o cadastro.");
    }
}

export async function GetShoppingCart(req, res){
    const {authorization} = req.headers
    const token = authorization?.replace("Bearer", "").trim();
   
    
    if(!token){       
        return res.sendStatus(401)
    } 
   

    const session = await database.collection("sessions").findOne({token})

    if(!session){        
        return res.sendStatus(401)
    } 

    const product = await database.collection("cart").find({_id: session.userID}).toArray()
    
   
    if(!product){
        return res.sendStatus(404)
    }   

    res.send(product)
}