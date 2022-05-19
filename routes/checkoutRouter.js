import { Router } from "express";

import { AddCheckOut, GetCheckOut } from "../controllers/checkoutControllers";
import checkoutSchema from "../middleware/authCheckoutMiddleware";
import { validateToken } from "../middleware/authMiddleware";


const chekoutRouter = Router();

chekoutRouter.post("/checkout", validateToken, checkoutSchema, AddCheckOut);
chekoutRouter.get("/checkout", validateToken, checkoutSchema, GetCheckOut);



export default chekoutRouter;