import express from 'express';
import routerProduct from './product.js';
import routerAuth from './auth.js'
const router = express.Router();

router.use('/products', routerProduct)
router.use('/auth', routerAuth)

export default router