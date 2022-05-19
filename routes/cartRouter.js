import { Router } from "express";
import { AddShoppingCart, GetShoppingCart } from "../controllers/cartControllers.js";

import { validateToken } from "../middleware/authMiddleware.js";

const cartRouter = Router();

cartRouter.post('/shoppingCart', validateToken, AddShoppingCart);
cartRouter.get('/shoppingCart', validateToken, GetShoppingCart);
cartRouter.delete('/shoppingCart/:productId' );

export default cartRouter;