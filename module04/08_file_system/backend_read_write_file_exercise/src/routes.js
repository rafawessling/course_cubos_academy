import express from 'express';
import { getProducts, registerSale } from './controllers/sales.js';

const routes = express();

routes.get('/products', getProducts);
routes.post('/products', registerSale);

export default routes;
