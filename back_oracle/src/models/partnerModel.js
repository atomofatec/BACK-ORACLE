// partnerModel.js
const sql = require("../db/index");
const bcrypt = require('bcrypt');

const Partner = {};

Partner.create = async (name, email, password) => {
    try {
        // Hash da senha
        //const hashedPassword = await bcrypt.hash(password, 10);

        // Consulta SQL para inserir o usuário
        const query = 'INSERT INTO users (user_name, email, password, type, benefits, track_id, expertise_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const values = [name, email, password, 'parceiro', false, 1, 1];

        // Executar a consulta
        const result = await sql.query(query, values);

        // Retornar o usuário criado
        return result.rows[0];
    } catch (error) {
        // Tratamento de erros
        console.error('Erro ao criar parceiro:', error.message);
        throw error;
    }
};

module.exports = Partner;
