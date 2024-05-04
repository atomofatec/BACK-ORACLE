const sql = require("../db");

const Partner = {};

Partner.deleteById = async (partnerId) => {
    try {
        // Executa a exclusão do usuário diretamente, sem verificar o tipo
        const deleteQuery = "DELETE FROM users WHERE user_id = $1";
        await sql.query(deleteQuery, [partnerId]);

        return true; // Retorna verdadeiro se a exclusão for bem-sucedida
    } catch (error) {
        console.error("Erro ao excluir usuário:", error.message);
        throw error;
    }
};

module.exports = Partner;