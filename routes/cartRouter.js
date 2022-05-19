import { Router } from "express";
import { AddShoppingCart, GetShoppingCart } from "../controllers/cartControllers.js";

import { validateToken } from "../middleware/authMiddleware.js";

const cartRouter = Router();

cartRouter.post('/shoppingCart',validateToken, AddShoppingCart);
cartRouter.get('/shoppingcart',validateToken, GetShoppingCart);
cartRouter.delete('/shoppingcart/:productId', validateToken);

export default cartRouter;