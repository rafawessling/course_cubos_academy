import pool from '../conexao.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import senhaJwt from '../senhaJwt.js';

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const query = `
            INSERT INTO usuarios
            (nome, email, senha)
            VALUES
            ($1, $2, $3)
            RETURNING *
        `;

        const { rows } = await pool.query(query, [nome, email, senhaCriptografada]);

        return res.status(201).json(rows[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const query = `
            SELECT * FROM usuarios WHERE email = $1
        `;

        const { rowCount, rows } = await pool.query(query, [email]);

        if (rowCount < 1) {
            return res.status(400).json({ mensagem: 'Email e/ou senha inválidos' });
        }

        const validarSenha = await bcrypt.compare(senha, rows[0].senha);

        if (!validarSenha) {
            return res.status(400).json({ mensagem: 'Email e/ou senha inválidos' });
        }

        const token = jwt.sign({ id: rows[0].id }, senhaJwt, { expiresIn: '8h' });

        const { senha: _, ...usuario } = rows[0];

        return res.status(200).json({ usuario, token });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

export { cadastrarUsuario, loginUsuario };
