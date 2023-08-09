import express from 'express';
import { getBuildings, getById } from './controllers/buildings.js';

const routes = express();

routes.get('/buildings', getBuildings);
routes.get('/buildings/:id', getById);

export default routes;
