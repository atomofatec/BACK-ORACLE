// user.js

const connection = require("../db/index");

// Função para encontrar usuário pelo ID
const findUserById = async (userId) => {
    try {
        const query = "SELECT * FROM users WHERE user_id = $1";
        const result = await connection.query(query, [userId]);
        return result.rows[0];
    } catch (error) {
        console.error("Erro ao buscar usuário pelo ID:", error);
        throw new Error("Erro ao buscar usuário pelo ID");
    }
};

module.exports = { findUserById };
