const sql = require("../db/index");

const getExpertisesProgress = async () =>{
    const result = await sql.query(`SELECT 
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
    t.track_name, e.expertise_name;`);
    return result.rows;
};

module.exports = getExpertisesProgress
