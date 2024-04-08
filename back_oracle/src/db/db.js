//String para conexão ao BD
const { Client } = require('pg');

function connectToDatabase() {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: 'fatec',
    port: 5432,
  });
  
  return client;
}

module.exports = connectToDatabase;
