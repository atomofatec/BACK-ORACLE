const sql = require("../db/index");
//aqui chama o arquivo de conexão

//realiza a consulta no bd de listar a tabela users
const listUsers = async () => {
    const result = await sql.query("SELECT * FROM users");
    return result.rows;
};

module.exports = listUsers;