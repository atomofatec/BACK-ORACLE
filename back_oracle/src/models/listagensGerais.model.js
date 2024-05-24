const pool = require("../db/index");

const getExpertisesByTrackId = async (track_id) => {
    const client = await pool.connect();
    try {
        const res = await client.query(
            "SELECT * FROM Expertises WHERE track_id = $1",
            [track_id]
        );
        return res.rows;
    } finally {
        client.release();
    }
};

const getQualificationsByExpertiseId = async (expertise_id) => {
    const client = await pool.connect();
    try {
        const res = await client.query(
            "SELECT * FROM Qualifications WHERE expertise_id = $1",
            [expertise_id]
        );
        return res.rows;
    } finally {
        client.release();
    }
};

const getExpertiseProgressByUserAndTrack = async (user_id, track_id) => {
    const client = await pool.connect();
    try {
        const query = `
      SELECT ue.user_id, e.track_id, e.expertise_id, e.expertise_name, ue.progress_percentage, ue.completed
      FROM UserExpertises ue
      INNER JOIN Expertises e ON ue.expertise_id = e.expertise_id
      WHERE ue.user_id = $1 AND e.track_id = $2;
    `;
        const res = await client.query(query, [user_id, track_id]);
        return res.rows;
    } finally {
        client.release();
    }
};

module.exports = {
    getExpertisesByTrackId,
    getQualificationsByExpertiseId,
    getExpertiseProgressByUserAndTrack,
};