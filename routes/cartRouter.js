import { Router } from "express";
import { AddShoppingCart, GetShoppingCart } from "../controllers/cartControllers.js";

import { validateToken } from "../middleware/authMiddleware.js";

const cartRouter = Router();

//cartRouter.use(validateToken)

cartRouter.post('/shoppingcart', AddShoppingCart);
cartRouter.get('/shoppincart', GetShoppingCart);
cartRouter.delete('/shoppingcart/:productId');

export default cartRouter;