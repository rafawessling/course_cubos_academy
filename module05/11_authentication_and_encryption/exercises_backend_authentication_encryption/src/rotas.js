import express from 'express';
import { cadastrarUsuario, loginUsuario } from './controladores/usuarios.js';
import {
    atualizarApelido,
    cadastrarPokemon,
    deletarPokemon,
    listarPokemon,
    listarPokemons,
} from './controladores/pokemons.js';
import { verificarLogin } from './middlewares/autenticacao.js';

const rotas = express();

rotas.post('/usuarios', cadastrarUsuario);
rotas.post('/login', loginUsuario);

rotas.use(verificarLogin);

rotas.post('/pokemons', cadastrarPokemon);
rotas.patch('/pokemons/:id', atualizarApelido);
rotas.get('/pokemons', listarPokemons);
rotas.get('/pokemons/:id', listarPokemon);
rotas.delete('/pokemons/:id', deletarPokemon);

export default rotas;
