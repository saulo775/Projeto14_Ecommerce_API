import { Router } from "express";
import { AddShoppingCart, GetShoppingCart } from "../controllers/cartControllers.js";

import { validateToken } from "../middleware/authMiddleware.js";

const cartRouter = Router();

cartRouter.post('/shoppingcart',validateToken, AddShoppingCart);
cartRouter.get('/shoppincart',validateToken, GetShoppingCart);
cartRouter.delete('/shoppingcart/:productId', validateToken);

export default cartRouter;