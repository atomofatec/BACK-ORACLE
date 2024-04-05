// UserModel.js
const connection = require('../db/index'); // O arquivo de conexão que você forneceu

const findUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const user = await connection.query(query, [email]);
  return user.rows[0];
};

module.exports = { findUserByEmail };