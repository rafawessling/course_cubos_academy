import pool from '../conexao.js';

const cadastrarPokemon = async (req, res) => {
    const { usuario_id, nome, habilidades, imagem, apelido } = req.body;

    if (!usuario_id || !nome || !habilidades) {
        return res.status(400).json({ mensagem: 'Id do Usuário, nome do Pokemon e habilidades são obrigatórios' });
    }

    if (typeof habilidades !== 'string') {
        return res.status(400).json({ mensagem: 'Insira as habilidades separadas por vírgulas' });
    }

    try {
        const queryUsuario = `
            SELECT * FROM usuarios WHERE id = $1
        `;

        const { rows, rowCount } = await pool.query(queryUsuario, [usuario_id]);

        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        const usuario = rows[0];

        const queryPokemon = `
            INSERT INTO pokemons
            (usuario_id, nome, habilidades, imagem, apelido)
            VALUES
            ($1, $2, $3, $4, $5)
            RETURNING *
        `;

        const pokemon = await pool.query(queryPokemon, [usuario.id, nome, habilidades, imagem, apelido]);

        const pokemonCadastrado = {
            id: pokemon.rows[0].id,
            usuario: usuario.nome,
            nome: pokemon.rows[0].nome,
            apelido: pokemon.rows[0].apelido,
            habilidades: pokemon.rows[0].habilidades.split(',').map(habilidade => habilidade.trim()),
            imagem: pokemon.rows[0].imagem,
        };

        return res.status(201).json(pokemonCadastrado);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const atualizarApelido = async (req, res) => {
    const { apelido } = req.body;
    const { id } = req.params;

    if (!apelido) {
        return res.status(400).json({ mensagem: 'Apelido é obrigatório' });
    }

    try {
        const queryPokemon = `
        SELECT * FROM pokemons WHERE id = $1
        `;

        const pokemon = await pool.query(queryPokemon, [id]);

        if (pokemon.rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon não encontrado' });
        }

        const queryUsuario = `
        SELECT * FROM usuarios WHERE id = $1
        `;

        const usuario = await pool.query(queryUsuario, [pokemon.rows[0].usuario_id]);

        if (usuario.rowCount < 1) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        const queryAtualizarPokemon = `
            UPDATE pokemons
            SET apelido = $1
            WHERE id = $2
            RETURNING *
        `;

        const { rows } = await pool.query(queryAtualizarPokemon, [apelido, id]);

        const pokemonAtualizado = {
            id: rows[0].id,
            usuario: usuario.rows[0].nome,
            nome: rows[0].nome,
            apelido: rows[0].apelido,
            habilidades: rows[0].habilidades.split(',').map(habilidade => habilidade.trim()),
            imagem: rows[0].imagem,
        };

        return res.status(200).json(pokemonAtualizado);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const listarPokemons = async (req, res) => {
    try {
        const query = `
            SELECT * FROM pokemons
        `;

        const { rows } = await pool.query(query);

        const pokemons = rows.map(pokemon => {
            return {
                ...pokemon,
                habilidades: pokemon.habilidades.split(',').map(habilidade => habilidade.trim()),
            };
        });

        return res.status(200).json(pokemons);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const listarPokemon = async (req, res) => {
    const { id } = req.params;

    try {
        const query = `
            SELECT * FROM pokemons WHERE id = $1
        `;

        const { rows, rowCount } = await pool.query(query, [id]);

        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon não encontrado' });
        }

        const queryUsuario = `
        SELECT * FROM usuarios WHERE id = $1
        `;

        const usuario = await pool.query(queryUsuario, [rows[0].usuario_id]);

        const pokemon = {
            id: rows[0].id,
            usuario: usuario.rows[0].nome,
            nome: rows[0].nome,
            apelido: rows[0].apelido,
            habilidades: rows[0].habilidades.split(',').map(habilidade => habilidade.trim()),
            imagem: rows[0].imagem,
        };

        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const deletarPokemon = async (req, res) => {
    const { id } = req.params;

    try {
        const query = `
            SELECT * FROM pokemons WHERE id = $1
        `;

        const { rowCount } = await pool.query(query, [id]);

        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon não encontrado' });
        }

        const queryDeletar = `
            DELETE FROM pokemons WHERE id = $1
        `;

        await pool.query(queryDeletar, [id]);

        return res.status(200).json({ mensagem: 'Pokemon excluído com sucesso' });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

export { cadastrarPokemon, atualizarApelido, listarPokemons, listarPokemon, deletarPokemon };
