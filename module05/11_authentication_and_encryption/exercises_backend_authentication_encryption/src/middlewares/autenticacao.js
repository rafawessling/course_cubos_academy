import jwt from 'jsonwebtoken';
import pool from '../conexao.js';
import senhaJwt from '../senhaJwt.js';

const verificarLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' });
    }

    const token = authorization.split(' ')[1];

    try {
        const query = `
            SELECT * FROM usuarios WHERE id = $1
        `;

        const { id } = jwt.verify(token, senhaJwt);

        const { rowCount } = await pool.query(query, [id]);

        if (rowCount < 1) {
            return res.status(401).json({ mensagem: 'Não autorizado' });
        }

        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

export { verificarLogin };
