const pool = require('../conexao');

const listarLivros = async (req, res) => {
    try {
        const query = `
            SELECT l.id, l.nome, l.genero, l.editora, l.data_publicacao, l.autor_id,
            a.nome as autor_nome, a.idade as autor_idade
            FROM livros l LEFT JOIN autores a
            ON l.autor_id = a.id
        `;

        const { rows } = await pool.query(query);

        const livros = rows.map(livro => {
            const { autor_id, autor_nome, autor_idade, ...dadosLivro } = livro;

            return {
                ...dadosLivro,
                autor: {
                    id: autor_id,
                    nome: autor_nome,
                    idade: autor_idade,
                },
            };
        });

        return res.json(livros);
    } catch (error) {
        return error.message;
    }
};

module.exports = { listarLivros };
