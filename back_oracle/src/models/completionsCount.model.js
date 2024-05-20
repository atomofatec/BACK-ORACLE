const sql = require("../db/index");

const getCompletionsCount = async () => {
  const query = `
    SELECT 
      t.track_name AS "Track Name",
      COUNT(ut.user_track_id) AS "Completions Count"
    FROM 
      Tracks t
    LEFT JOIN 
      UserTracks ut ON t.track_id = ut.track_id
    WHERE 
      ut.completed = TRUE
    GROUP BY 
      t.track_name;
  `;
  const result = await sql.query(query);
  return result.rows;
};

module.exports = { getCompletionsCount };
