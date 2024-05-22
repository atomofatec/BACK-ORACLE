const sql = require("../db/index");

const expertisesModel = {
    getExpertises: async () => {
        const query = `SELECT * FROM expertises`;
        const result = await sql.query(query);
        return result.rows;
    },
};

module.exports = expertisesModel;