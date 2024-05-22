// partnerModel.js
const sql = require("../db/index");
const bcrypt = require("bcrypt");

async function insertTracks(userId, trackId) {
    const query = "INSERT INTO usertracks (user_id, track_id, completed) VALUES ($1, $2, $3) RETURNING *";
    //const totalTestGrade = 0;
    const values = [userId, trackId, false];
    return await sql.query(query, values);
}

const Partner = {};

Partner.create = async (name, email, password) => {
    try {
        // Hash da senha
        //const hashedPassword = await bcrypt.hash(password, 10);

        // Consulta SQL para inserir o usuário
        const query =
            "INSERT INTO users (user_name, email, password, type, benefits) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [name, email, password, "parceiro", false];
        // Executar a consulta
        const result = await sql.query(query, values);
        const userId = result.rows[0].user_id;

        // Usa função para inserir os 4 tracks
        const trackResults = [];
        const trackIds = [1, 2, 3, 4];
        for (const trackId of trackIds) {
            const result = await insertTracks(userId, trackId);
            trackResults.push(result);
        }

        // Retornar o usuário criado
        return result.rows[0];
    } catch (error) {
        // Tratamento de erros
        console.error("Erro ao criar parceiro:", error.message);
        throw error;
    }
};

Partner.selectWithUser = async (user_id) => {
    try {
        const query = `SELECT * FROM userexpertises WHERE user_id = $1`;
        const values = [user_id];
        const result = await sql.query(query, values);
        return result.rows;
    } catch (error) {
        console.error("Erro ao retornar expertises com usuário:", error.message);
        throw error;
    }
};

Partner.expertiseList = async () => {
    try {
        const query = `SELECT expertise_id, track_id, expertise_name FROM expertises`;
        const result = await sql.query(query);
        return result.rows;
    } catch (error) {
        console.error("Erro ao retornar expertises:", error.message);
        throw error;
    }
};


Partner.qualificationList = async () => {
    try {
        const query = `SELECT qualification_id, expertise_id, qualification_name FROM qualifications`;
        const result = await sql.query(query);
        return result.rows;
    } catch (error) {
        console.error("Erro ao retornar qualifications:", error.message);
        throw error;
    }
};

module.exports = Partner;

