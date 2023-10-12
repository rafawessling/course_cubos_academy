const pool = require('../conexao');

const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body;

    if (!nome || nome.length === 0) {
        return res.status(400).json({ mensagem: 'o campo nome é obrigatório.' });
    }

    try {
        const query = `
            INSERT INTO autores
            (nome, idade)
            VALUES
            ($1, $2)
            RETURNING *
        `;
        const params = [nome, idade];

        const { rows } = await pool.query(query, params);

        return res.status(201).json(rows[0]);
    } catch (error) {
        return error.message;
    }
};

const obterAutor = async (req, res) => {
    const { id } = req.params;

    try {
        const query = `
            SELECT a.id, a.nome, a.idade, l.id as livro_id, 
            l.nome as livro_nome, l.genero, l.editora, l.data_publicacao 
            FROM autores a LEFT JOIN livros l ON a.id = l.autor_id
            WHERE a.id = $1
            `;

        const params = [id];

        const { rowCount, rows } = await pool.query(query, params);

        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'autor não encontrado.' });
        }

        const livros = rows.map(livro => {
            return {
                id: livro.livro_id,
                nome: livro.livro_nome,
                genero: livro.genero,
                editora: livro.editora,
                data_publicacao: livro.data_publicacao,
            };
        });

        const autor = {
            id: rows[0].id,
            nome: rows[0].nome,
            idade: rows[0].idade,
            livros,
        };

        return res.status(200).json(autor);
    } catch (error) {
        return error.message;
    }
};

const cadastrarLivroAutor = async (req, res) => {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params;

    if (!nome || nome.length === 0) {
        return res.json({ mensagem: 'o campo nome é obrigatório.' });
    }

    try {
        const queryAutor = `
            SELECT * FROM autores WHERE id = $1
        `;

        const paramsAutor = [id];

        const { rowCount, rows } = await pool.query(queryAutor, paramsAutor);

        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'autor não encontrado.' });
        }

        const autor = rows[0];

        const query = `
            INSERT INTO livros
            (nome, genero, editora, data_publicacao, autor_id)
            VALUES
            ($1, $2, $3, $4, $5)
            RETURNING *
        `;
        const params = [nome, genero, editora, data_publicacao, autor.id];

        const livro = await pool.query(query, params);

        return res.status(201).json(livro.rows[0]);
    } catch (error) {
        return error.message;
    }
};

module.exports = { cadastrarAutor, obterAutor, cadastrarLivroAutor };
