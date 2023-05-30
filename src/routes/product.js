import express from 'express'
import { create, getAll, getDetail,remove } from '../controllers/product.js';
const routerProduct = express.Router()

routerProduct.get('/', getAll);
routerProduct.get('/:id', getDetail);
routerProduct.post('/', create);
// routerProduct.patch('/', update);
routerProduct.delete('/:id', remove);

export default routerProduct