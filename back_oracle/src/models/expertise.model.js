const pool = require('../db/index');

const getExpertisesByTrackId = async (track_id) => {
  const client = await pool.connect();
  try {
    const res = await client.query(
      'SELECT * FROM Expertises WHERE track_id = $1',
      [track_id]
    );
    return res.rows;
  } finally {
    client.release();
  }
};

module.exports = {
  getExpertisesByTrackId
};
