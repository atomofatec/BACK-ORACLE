//aqui chama o arquivo de conexão
//realiza a consulta no bd de listar a tabela users
//gera a resposta json e depois pegamos os
//dados
const express = require('express');
const connectToDatabase = require('../db/db');

const router = express.Router();

router.get('/listUsers', async (req, res) => {
  const client = connectToDatabase();

  try {
    await client.connect();
    const result = await client.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.end();
  }
});

module.exports = router;
