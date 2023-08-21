import { listarPokemons, detalharPokemon } from 'utils-playground';

const getPokemons = async (req, res) => {
    try {
        const pokemons = await listarPokemons();

        return res.status(200).json(pokemons.results);
    } catch (err) {
        return res.status(500).json(err.message);
    }
};

const getPokemonById = async (req, res) => {
    const { idPokemon } = req.params;

    try {
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

        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(err.message);
    }
};

const getPokemonByName = async (req, res) => {
    const { namePokemon } = req.params;

    try {
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

        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(err.message);
    }
};

export { getPokemons, getPokemonById, getPokemonByName };
