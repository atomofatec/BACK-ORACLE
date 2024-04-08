require("dotenv").config();
const { Pool } = require("pg");

const connection = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
});

module.exports = connection;