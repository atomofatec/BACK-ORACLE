const pool = require('../db/index');

const getUserProgramTracks = async (user_id) => {
  const client = await pool.connect();
  try {
    const res = await client.query(
      `SELECT DISTINCT track_name 
      FROM Tracks 
      JOIN UserTracks ON Tracks.track_id = UserTracks.track_id 
      WHERE UserTracks.user_id = $1`,
      [user_id]
    );
    return res.rows;
  } finally {
    client.release();
  }
};

module.exports = {
  getUserProgramTracks
};
