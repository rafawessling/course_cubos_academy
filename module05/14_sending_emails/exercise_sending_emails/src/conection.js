import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'send_email_newsletter',
        password: 'postgres',
    },
});

export default db;
