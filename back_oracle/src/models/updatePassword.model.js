const sql = require("../db/index");

const Password = {};

// Função para alterar a senha de um usuário
Password.changePassword = async (userId, newPassword) => {
    const result = await sql.query(
        `UPDATE users
        SET password = $1, updatedat = NOW()
        WHERE user_id = $2`,
        [newPassword, userId]
    );
    return result.rowCount > 0;
};

module.exports = Password;
