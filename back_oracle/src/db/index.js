require("dotenv").config();
const { Pool } = require("pg");

const connection = new Pool({
    host: process.env.PGHOST || PGHOST,
    user: process.env.PGUSER || PGUSER,
    password: process.env.PGPASSWORD || PGPASSWORD,
    database: process.env.PGDATABASE || PGDATABASE,
});

module.exports = connection;