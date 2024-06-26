const connection = require("../db/index");

const findUserByEmail = async (email) => {
    const query = "SELECT * FROM users WHERE email = $1";
    const user = await connection.query(query, [email]);
    return user.rows[0];
};

// Função para criar um novo usuário
const createUser = async (userData) => {
    const {
        user_name,
        email,
        password,
        type,
        benefits,
        createdAt,
        updatedAt,
    } = userData;
    const query = `
    INSERT INTO users (user_name, email, password, type, benefits, createdAt, updatedAt)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
    await connection.query(query, [
        user_name,
        email,
        password,
        type,
        benefits,
        createdAt,
        updatedAt,
    ]);
};

module.exports = { findUserByEmail, createUser };