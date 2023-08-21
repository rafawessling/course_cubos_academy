import express from 'express';
import { getProdutos, getProdutoById, getProdutoFrete } from './controllers/produtos.js';

const routes = express();

routes.get('/produtos', getProdutos);
routes.get('/produtos/:idProduto', getProdutoById);
routes.get('/produtos/:idProduto/frete/:cep', getProdutoFrete);

export default routes;
