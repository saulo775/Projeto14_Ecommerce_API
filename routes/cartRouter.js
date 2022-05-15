import { Router } from "express";
import { AddShoppingCart, GetShoppingCart } from "../controllers/cartControllers.js";

const cartRouter = Router();

cartRouter.post('/shoppingcart', AddShoppingCart);
cartRouter.get('/shoppincart', GetShoppingCart);

export default cartRouter;