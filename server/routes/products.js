import express from 'express';

import { getProducts, createProduct, deleteProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/:product', getProducts);
router.post('/add', createProduct);
router.delete('/:id', deleteProduct);

export default router;

// export const alojamientos = 'alojamientos';
// export const vuelos = 'vuelos';
// export const paquetes = 'paquetes';
// export const ofertas = 'ofertas';
// export const actividades = 'actividades';
// export const autos = 'autos';
// export const asistencias = 'asistencias';
// export const traslados = 'traslados';