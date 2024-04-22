// partnerModel.js
const sql = require("../db/index");
const bcrypt = require("bcrypt");

async function insertTest(userId, trackId, testNumber, testGrade) {
    const query = "INSERT INTO tests (user_id, track_id, test_number, test_grade) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [userId, trackId, testNumber, testGrade || 0]; // Atribuir 0 se testGrade for undefined
    return await sql.query(query, values);
}

async function insertExpertise(userId, trackId) {
    const query = "INSERT INTO expertises (user_id, track_id, total_test_grade) VALUES ($1, $2, $3) RETURNING *";
    const totalTestGrade = 0;
    const values = [userId, trackId, totalTestGrade];
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
        
        // Usa função para inserir os 3 tracks
        const expertiseResults = [];
        const trackIds = [1, 2, 3];
        for (const trackId of trackIds) {
            const result = await insertExpertise(userId, trackId);
            expertiseResults.push(result);
        }
        
        // Usa função inserir os 12 testes referentes as 3 tracks
        const testResults = [];
        for (let i = 1; i <= 4; i++) {
            const result = await insertTest(userId, 1, i, 0);
            testResults.push(result);
        }

        const testResults2 = [];
        for (let i = 1; i <= 4; i++) {
            const result = await insertTest(userId, 2, i, 0);
            testResults2.push(result);
        }

        const testResults3 = [];
        for (let i = 1; i <= 4; i++) {
            const result = await insertTest(userId, 3, i, 0);
            testResults3.push(result);
        }

        // Retornar o usuário criado
        return result.rows[0];
    } catch (error) {
        // Tratamento de erros
        console.error("Erro ao criar parceiro:", error.message);
        throw error;
    }
};

Partner.update = async (userId, trackId, testNumber, testGrade) => {
    try {
        const query =
            "UPDATE tests SET test_grade = $4 WHERE user_id = $1 AND track_id = $2 AND test_number = $3 RETURNING *";

        const values = [userId, trackId, testNumber, testGrade];
        const result = await sql.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error("Erro ao atualizar parceiro:", error.message);
        throw error;
    }   
};

Partner.select = async (userId) => {
    try {
        const query =
            "SELECT * from expertises WHERE user_id = $1";

        const values = [userId];
        const result = await sql.query(query, values);
        return result.rows;

    } catch (error) {
        console.error("Erro ao retornar expertises:", error.message);
        throw error;
    }   
};

module.exports = Partner;

