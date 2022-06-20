import express from 'express';

import { getProducts, createProduct, deleteProduct, findProducts } from '../controllers/products.js';

const router = express.Router();

router.get('/:product', getProducts);
router.get('/:productSearch', findProducts);
router.post('/add', createProduct);
router.delete('/:id', deleteProduct);

export default router;

