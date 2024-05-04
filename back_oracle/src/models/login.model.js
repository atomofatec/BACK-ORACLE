const sql = require("../db/index");

const User = function (user) {
    this.user_id = user.user_id;
    this.email = user.email;
    this.password = user.password;
    this.type = user.type;
};

// Função para buscar um usuário pelo ID
User.findById = async (id) => {
    const result = await sql.query(
        `
        SELECT user_id, email, type
        FROM users
        WHERE user_id = ($1)
    `,
        [id]
    );
    return result.rows[0];
};

// Função para buscar um usuário pelo email
User.findByEmail = async (email) => {
    const result = await sql.query(
        `SELECT user_id, password, type, user_name, email, benefits, createdat, updatedat
        FROM users
        WHERE email = ($1)`,
        [email]
    );
    return result.rows;
};

module.exports = User;