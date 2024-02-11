import { Router } from 'express';
import { atualizarCarros, cadastrarCarros, deletarCarros, detalharCarros, listarCarros } from './controladores/carros';

const rotas = Router();

rotas.get('/carros', listarCarros);
rotas.get('/carros/:id', detalharCarros);
rotas.post('/carros', cadastrarCarros);
rotas.put('/carros/:id', atualizarCarros);
rotas.delete('/carros/:id', deletarCarros);

export default rotas;
