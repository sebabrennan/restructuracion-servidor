import { Router } from 'express'
import { productsResponse } from '../controllers/product.controller.js';

const router = Router()

router.get("/profile", productsResponse);

export default router;