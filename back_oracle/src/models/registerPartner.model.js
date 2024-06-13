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
        const query = `INSERT INTO users (user_name, email, password, type, benefits) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [name, email, password, "parceiro", false];
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

Partner.selectTrackById = async (user_id) => {
    try {
        const query = `SELECT * FROM usertracks WHERE user_id = $1 and completed = $2`;
        const values = [user_id, true];
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

Partner.updateUserQualification = async (user_id, qualification_id) => {
    try {
        const query = `UPDATE userqualifications SET completed = true WHERE user_id = $1 AND qualification_id = $2 RETURNING *`;
        const values = [user_id, qualification_id];
        const result = await sql.query(query, values);
        return result.rows;
    } catch (error) {
        console.error("Erro ao atualizar expertises do usuário", error.message);
        throw error;
    }
};

Partner.updateUserTrack = async (user_id, track_id) => {
    try {
        const query = `UPDATE usertracks SET completed = true WHERE user_id = $1 AND track_id = $2 RETURNING *`;
        const values = [user_id, track_id];
        const result = await sql.query(query, values);
        return result.rows;
    } catch (error) {
        console.error("Erro ao atualizar expertises do usuário", error.message);
        throw error;
    }
};

Partner.updateUserExpertise = async (user_id, expertise_id) => {
    try {
        const query = `UPDATE userexpertises SET completed = true WHERE user_id = $1 AND expertise_id = $2 RETURNING *`;
        const values = [user_id, expertise_id];
        const result = await sql.query(query, values);
        return result.rows;
    } catch (error) {
        console.error("Erro ao atualizar expertises do usuário", error.message);
        throw error;
    }
};

module.exports = Partner;