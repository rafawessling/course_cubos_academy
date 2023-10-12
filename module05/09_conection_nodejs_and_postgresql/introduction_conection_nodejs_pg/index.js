const express = require('express');
const pool = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const { pagina, porPagina } = req.query;
    try {
        // const query = 'select * from empresas where nome = $1 or nome = $2'
        // const params = ['Google', 'Facebook']

        // const query = 'update empresas set site = $1 where id = $2'
        // const params = ['www.cakewalk.com', 1]

        // const query = `
        //     select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as funcionario
        //     from empresas e
        //     join filiais f on e.id = f.empresa_id
        //     join pessoas p on e.id = p.empresa_id;
        // `

        // const query = `
        //     select e.id as empresaid, f.id as filialid, e.nome, f.pais
        //     from empresas e
        //     left join filiais f on e.id = f.empresa_id
        // `;

        // const query = `
        //     select e.id as empresaid, f.id as filialid, e.nome, f.pais
        //     from empresas e
        //     right join filiais f on e.id = f.empresa_id
        // `

        // const query = `
        //     select e.id as empresaid, f.id as filialid, e.nome, f.pais
        //     from empresas e
        //     full join filiais f on e.id = f.empresa_id;
        // `

        const query = 'select * from pessoas order by id asc limit $1 offset $2';

        const { rowCount } = await pool.query('select * from pessoas');

        const offset = pagina === 1 ? 0 : (pagina - 1) * porPagina;

        const resultado = await pool.query(query, [porPagina, offset]);
        const result = {
            pagina,
            porPagina,
            total: rowCount,
            registros: resultado.rows,
        };
        return res.json(result);
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(3000);
