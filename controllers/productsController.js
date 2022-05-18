import db from "../db.js";

export async function saveNewProduct(req, res){
    const body = req.body;
    try {
        await db.collection("products").insertOne(body);
        return res.send(body);
    } catch (e) {
        console.log(e)
        res.status(422).send("Não foi possível cadastrar esse produto!");
    }
}

export async function getAllProducts(req, res){
    try {
        const allProducts = await db.collection("products").find().toArray();

        allProducts.forEach(item => {
            delete item._id;
        });

        res.send(allProducts);
    } catch (e) {
        console.log("Não foi possível buscar os produdos",e);
        res.status(500).send("Não foi possível buscar os produdos");
    }
}

export async function getFeaturedProducts(req, res) {
    const MAX_FEATUREDPRODUCTS = 8;
    try {
        const allProducts = await db.collection("products").find().toArray();

        function compare(a, b) {
            if (a.sales > b.sales) {
                return -1;
            }
            if( a.sales < b.sales){
                return 1
            }
            return 0;
        }

        allProducts.sort(compare);

        let featured = [];

        for (let i = 0; i < MAX_FEATUREDPRODUCTS; i++) {
            featured.push(allProducts[i]);
        }

        featured.forEach(item => {
            delete item._id;
        });

        res.send(featured);
    } catch (e) {
        console.log("Não foi possível buscar os produtos",e);
        res.status(500).send("Não foi possível buscar os produtos");
    }
}