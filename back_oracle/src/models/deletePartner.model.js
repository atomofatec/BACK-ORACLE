const sql = require("../db/index");

const Partner = {};

Partner.deleteById = async (partnerId) => {
    try {
        // Excluir os registros relacionados na tabela "UserTracks"
        const deleteTracksQuery = "DELETE FROM UserTracks WHERE user_id = $1";
        await sql.query(deleteTracksQuery, [partnerId]);

        // Excluir os registros relacionados na tabela "UserExpertises"
        const deleteExpertisesQuery = "DELETE FROM UserExpertises WHERE user_id = $1";
        await sql.query(deleteExpertisesQuery, [partnerId]);

        // Excluir os registros relacionados na tabela "UserQualifications"
        const deleteQualificationsQuery = "DELETE FROM UserQualifications WHERE user_id = $1";
        await sql.query(deleteQualificationsQuery, [partnerId]);

        // Excluir o usuário da tabela "Users"
        const deleteQuery = "DELETE FROM Users WHERE user_id = $1";
        await sql.query(deleteQuery, [partnerId]);

        return true; // Retorna verdadeiro se a exclusão for bem-sucedida
    } catch (error) {
        console.error("Erro ao excluir parceiro:", error.message);
        throw error;
    }
};

module.exports = Partner;
