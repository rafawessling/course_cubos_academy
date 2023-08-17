import { listarPokemons, detalharPokemon } from 'utils-playground';

const getPokemons = async (req, res) => {
    const pokemons = await listarPokemons();

    return res.send(pokemons.results);
};

const getPokemonById = async (req, res) => {
    const { idPokemon } = req.params;

    const pokemonEncontrado = await detalharPokemon(idPokemon);

    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEncontrado;

    const result = {
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species,
    };

    return res.send(result);
};

const getPokemonByName = async (req, res) => {
    const { namePokemon } = req.params;

    const pokemonEncontrado = await detalharPokemon(namePokemon);

    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEncontrado;

    const result = {
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species,
    };

    return res.send(result);
};

export { getPokemons, getPokemonById, getPokemonByName };
