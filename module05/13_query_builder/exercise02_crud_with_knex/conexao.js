const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'exercicio2_knexjs',
    },
});

module.exports = knex;
