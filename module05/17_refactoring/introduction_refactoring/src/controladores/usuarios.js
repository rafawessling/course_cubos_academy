const knex = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, telefone } = req.body;

    try {
        console.log(req.body);

        const quantidadeUsuarios = await knex('usuarios').where({ email }).first();

        if (quantidadeUsuarios) {
            return res.status(400).json('O email já existe');
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios')
            .insert({
                nome,
                email,
                senha: senhaCriptografada,
                telefone,
            })
            .returning('*');

        if (!usuario) {
            return res.status(400).json('O usuário não foi cadastrado.');
        }

        return res.status(200).json(usuario[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
};

const atualizarPerfil = async (req, res) => {
    let { nome, email, senha, telefone } = req.body;
    const { id } = req.usuario;

    if (!nome && !email && !senha && !telefone) {
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização');
    }

    try {
        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json('Usuario não encontrado');
        }

        if (senha) {
            senha = await bcrypt.hash(senha, 10);
        }

        if (email !== req.usuario.email) {
            const emailUsuarioExiste = await knex('usuarios').where({ email }).first();

            if (emailUsuarioExiste) {
                res.status(404).json('O Email já existe.');
                return;
            }
        }

        const usuarioAtualizado = await knex('usuarios').where({ id }).update({
            nome,
            email,
            senha,
            telefone,
        });

        if (!usuarioAtualizado) {
            return res.status(400).json('O usuario não foi atualizado');
        }

        res.status(200).json('Usuario foi atualizado com sucesso.');
        return;
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil,
};
