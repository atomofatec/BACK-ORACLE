const sql = require("../db/index");

const getQualificationsStatus = async () =>{
    const result = await sql.query(`SELECT 
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
    e.expertise_name, q.qualification_name;`);
    return result.rows;
};

module.exports = getQualificationsStatus
