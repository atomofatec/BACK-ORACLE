const connection = require('../db/index'); 
const bcrypt = require('bcrypt');

// Função para criar um usuário
async function createPartner(name, email, password) {
    try {
      
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const query = 'INSERT INTO users (user_name, email, password, type) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [name, email, hashedPassword, 'parceiro'];
      const result = await connection.query(query, values);
  
      return result.rows[0];
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
}
  
module.exports = { createPartner };