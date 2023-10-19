const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await knex('usuarios');
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await knex('usuarios').where({ id }).first();

        if (!usuario) {
            return res.status(404).json('Usuário não encontrado');
        }

        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

app.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome) {
        return res.status(400).json('O campo nome é obrigatório');
    }

    if (!email) {
        return res.status(400).json('O campo email é obrigatório');
    }

    if (!senha) {
        return res.status(400).json('O campo senha é obrigatório');
    }

    try {
        const usuario = await knex('usuarios').insert({ nome, email, senha }).returning('*');

        if (usuario.length === 0) {
            return res.status(400).json('Não foi possível cadastrar o usuário');
        }

        return res.status(201).json(usuario[0]);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

app.putt('/usuarios/:id', async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;

    if (!nome) {
        return res.status(400).json('O campo nome é obrigatório');
    }

    if (!email) {
        return res.status(400).json('O campo email é obrigatório');
    }

    if (!senha) {
        return res.status(400).json('O campo senha é obrigatório');
    }

    try {
        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json('Usuário não encontrado');
        }

        const usuario = await knex('usuario').update({ nome, email, senha }).where({ id });

        if (!usuario) {
            return res.status(400).json('Não foi possível atualizar o usuário');
        }

        return res.status(200).json(usuario[0]);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json('Usuário não encontrado');
        }

        const usuario = await knex('usuario').del().where({ id });

        if (!usuario) {
            return res.status(400).json('Não foi possível excluir o usuário');
        }

        return res.status(200).json('Usuário excluído com sucesso');
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

app.listen(3000);
