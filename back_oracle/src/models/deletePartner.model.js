const sql = require("../db/index");

const Partner = {};

Partner.deleteById = async (partnerId) => {
    try {
        // Exclui os registros relacionados na tabela "tests"
        const deleteTestsQuery = "DELETE FROM tests WHERE user_id = $1";
        await sql.query(deleteTestsQuery, [partnerId]);

        // Exclui os registros relacionados na tabela "expertises"
        const deleteExpertisesQuery = "DELETE FROM expertises WHERE user_id = $1";
        await sql.query(deleteExpertisesQuery, [partnerId]);

        // Verifica se o usuário a ser excluído é do tipo "parceiro"
        const queryUserType = "SELECT type FROM users WHERE user_id = $1";
        const resultUserType = await sql.query(queryUserType, [partnerId]);
        const userType = resultUserType.rows[0].type;

        if (userType !== "parceiro") {
            throw new Error("Você não tem permissão para excluir este usuário");
        }

        // Se for do tipo "parceiro", prossegue com a exclusão
        const deleteQuery = "DELETE FROM users WHERE user_id = $1";
        await sql.query(deleteQuery, [partnerId]);

        return true; // Retorna verdadeiro se a exclusão for bem-sucedida
    } catch (error) {
        console.error("Erro ao excluir parceiro:", error.message);
        throw error;
    }
};

module.exports = Partner;
