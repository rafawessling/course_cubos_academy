import express from 'express';
import { getEndereco } from './controllers/endereco.js';

const routes = express();

routes.get('/enderecos/:cep', getEndereco);

export default routes;
