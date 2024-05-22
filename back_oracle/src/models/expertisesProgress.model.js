const sql = require("../db/index");

const expertisesProgressModel = {
    getExpertisesProgress: async () => {
        const query = `
      SELECT 
        t.track_name AS "Track Name",
        e.expertise_name AS "Expertise Name",
        AVG(ue.progress_percentage) AS "Average Progress"
      FROM 
        Tracks t
      JOIN 
        Expertises e ON t.track_id = e.track_id
      LEFT JOIN 
        UserExpertises ue ON e.expertise_id = ue.expertise_id
      GROUP BY 
        t.track_name, e.expertise_name
    `;
        const result = await sql.query(query);
        return result.rows;
    },
};

module.exports = expertisesProgressModel;