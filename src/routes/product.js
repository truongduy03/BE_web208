import express from 'express'
import { create, getAll, getDetail } from '../controllers/product';
const routerProduct = express.Router()

routerProduct.get('/', getAll);
routerProduct.get('/:id', getDetail);
routerProduct.post('/', create);
// routerProduct.patch('/', update);
// routerProduct.delete('/:id', remove);

export default routerProduct