const sql = require("../db/index");

const getPartnersCount = async () => {
  const query = `
    SELECT 
      t.track_name AS "Track Name",
      COUNT(ut.user_id) AS "Partners Count"
    FROM 
      Tracks t
    LEFT JOIN 
      UserTracks ut ON t.track_id = ut.track_id
    GROUP BY 
      t.track_name;
  `;
  const result = await sql.query(query);
  return result.rows;
};

module.exports = { getPartnersCount };
