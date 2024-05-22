const sql = require("../db/index");

const getExpertises = async () =>{
    const result = await sql.query(`SELECT * FROM expertises`);
    return result.rows;
};

module.exports = getExpertises