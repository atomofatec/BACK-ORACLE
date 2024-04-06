require('dotenv').config()
const { Pool } = require('pg')

const connection = new Pool({

    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
})

module.exports = connection;


// const { Pool } = require('pg');

// // Configuração da conexão com o banco de dados
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'ORACLE2',
//     password: 'fatec',
//     port: 5432
// });

// module.exports = pool;