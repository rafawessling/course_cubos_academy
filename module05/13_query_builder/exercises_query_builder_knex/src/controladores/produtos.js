const knex = require('../conexao');

const listarProdutos = async (req, res) => {
    const { usuario } = req;
    const { categoria } = req.query;

    try {
        const query = await knex('produtos').where('usuario_id', usuario.id);

        if (categoria) {
            query.where('categoria', 'ilike', `%${categoria}%`);
        }

        const produtos = await query;

        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const obterProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produto = await knex('produtos').where({ id }).where('usuario_id', usuario.id);

        if (!produto || produto.length === 0) {
            return res.status(404).json('Produto não encontrado');
        }

        return res.status(200).json(produto);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const cadastrarProduto = async (req, res) => {
    const { usuario } = req;
    const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!estoque) {
        return res.status(404).json('O campo estoque é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preco é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descricao é obrigatório');
    }

    try {
        const produto = await knex('produtos')
            .insert({ usuario_id: usuario.id, nome, estoque, preco, categoria, descricao, imagem })
            .returning('*');

        if (!produto || produto.length === 0) {
            return res.status(400).json('O produto não foi cadastrado');
        }

        return res.status(200).json(produto);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const atualizarProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

    if (!nome && !estoque && !preco && !categoria && !descricao && !imagem) {
        return res.status(404).json('Informe ao menos um campo para atualizaçao do produto');
    }

    try {
        const produto = await knex('produtos').where({ id }).where('usuario_id', usuario.id);

        if (!produto || produto.length === 0) {
            return res.status(404).json('Produto não encontrado');
        }

        const body = {};

        if (nome) {
            body.nome = nome;
        }

        if (estoque) {
            body.estoque = estoque;
        }

        if (categoria) {
            body.categoria = categoria;
        }

        if (descricao) {
            body.descricao = descricao;
        }

        if (preco) {
            body.preco = preco;
        }

        if (imagem) {
            body.imagem = imagem;
        }

        const valores = Object.values(body);
        valores.push(id);
        valores.push(usuario.id);
        const produtoAtualizado = await knex('produtos').update(body).where({ id }).where('usuario_id', usuario.id);

        if (produtoAtualizado === 0) {
            return res.status(400).json('O produto não foi atualizado');
        }

        return res.status(200).json('O produto foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const excluirProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produto = await knex('produtos').where({ id }).where('usuario_id', usuario.id);

        if (!produto || produto.length === 0) {
            return res.status(404).json('Produto não encontrado');
        }

        const produtoExcluido = await knex('produtos').del().where({ id });

        if (produtoExcluido === 0) {
            return res.status(400).json('O produto não foi excluido');
        }

        return res.status(200).json('Produto excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto,
};
