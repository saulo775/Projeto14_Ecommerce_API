import { Router } from "express";
import { 
    saveNewProduct,
    getAllProducts,
    getFeaturedProducts
} from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.post("/save-products", saveNewProduct);
productsRouter.get("/products", getAllProducts);
productsRouter.get("/featured-products", getFeaturedProducts);


export default productsRouter;