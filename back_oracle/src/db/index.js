require("dotenv").config();
const { Pool } = require("pg");

const connection = new Pool({
    host: process.env.PGHOST || "localhost",
    user: process.env.PGUSER || "postgres",
    password: process.env.PGPASSWORD || "fatec",
    database: process.env.PGDATABASE || "oracle_db_v2",
});

module.exports = connection;