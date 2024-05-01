const sql = require("../db/index");

const Partner = {};

Partner.deleteById = async (partnerId) => {
    try {
        // Verifica se o usuário a ser excluído é do tipo "parceiro"
        const query = "SELECT type FROM users WHERE user_id = $1";
        const result = await sql.query(query, [partnerId]);
        const userType = result.rows[0].type;
        
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