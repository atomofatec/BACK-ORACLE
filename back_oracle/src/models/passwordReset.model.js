const sql = require("../db/index");

const PasswordReset = {};

PasswordReset.findByEmail = async (email) => {
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await sql.query(query, [email]);
    return result.rows[0];
};

PasswordReset.updatePassword = async (email, newPassword) => {
    const query = `UPDATE users SET password = $1 WHERE email = $2`;
    await sql.query(query, [newPassword, email]);
};

module.exports = PasswordReset;
