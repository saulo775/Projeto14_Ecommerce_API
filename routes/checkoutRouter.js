import { Router } from "express";

import { AddCheckOut, DeleteShoppingCart } from "../controllers/checkoutControllers.js";
import checkoutSchema from "../middleware/authCheckoutMiddleware.js";
import { validateToken } from "../middleware/authMiddleware.js";


const checkoutRouter = Router();

checkoutRouter.post("/checkout",validateToken, checkoutSchema, AddCheckOut);
checkoutRouter.delete("/cart/:id", DeleteShoppingCart)


export default checkoutRouter;