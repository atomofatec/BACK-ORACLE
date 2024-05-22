const sql = require("../db/index");

const qualificationsStatusModel = {
    getQualificationsStatus: async () => {
        const query = `
      SELECT 
        e.expertise_name AS "Expertise Name",
        q.qualification_name AS "Qualification Name",
        COUNT(uq.completed) FILTER (WHERE uq.completed = TRUE) AS "Completed Count",
        COUNT(uq.completed) AS "Total Count"
      FROM 
        Expertises e
      JOIN 
        Qualifications q ON e.expertise_id = q.expertise_id
      LEFT JOIN 
        UserQualifications uq ON q.qualification_id = uq.qualification_id
      GROUP BY 
        e.expertise_name, q.qualification_name
    `;
        const result = await sql.query(query);
        return result.rows;
    },
};

module.exports = qualificationsStatusModel;