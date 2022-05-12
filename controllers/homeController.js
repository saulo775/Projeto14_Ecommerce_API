async function getAllProducts(req, res){
    try {
        const allFinances = await db.collection("products").find().toArray();

        allFinances.forEach(item => {
            delete item._id;
        });

        res.send(allFinances);
    } catch (e) {
        console.log("Não foi possível buscar os produdos",e);
        res.status(500).send("Não foi possível buscar os produdos");
    }
}


export default getAllProducts;
