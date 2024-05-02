require("dotenv").config();
const { Pool } = require("pg");

const connection = new Pool({
    host: "localhost",
    user: "postgres",
    password: "fatec",
    database: "oracle_db_v2",
});

module.exports = connection;