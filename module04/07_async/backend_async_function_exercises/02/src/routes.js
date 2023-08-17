import express from 'express';
import { getPokemons, getPokemonById, getPokemonByName } from './controllers/pokemons.js';

const routes = express();

routes.get('/pokemon', getPokemons);
routes.get('/pokemon/:idPokemon', getPokemonById);
routes.get('/pokemon/:namePokemon', getPokemonByName);

export default routes;
