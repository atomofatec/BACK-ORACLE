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

const getQualificationsByExpertiseId = async (expertise_id, user_id) => {
    const client = await pool.connect();
    try {
        const res = await client.query(
            `SELECT 
                q.qualification_name,
                q.qualification_id,
                q.expertise_id,
                uq.user_id,
                uq.completed
            FROM 
                Qualifications q
            JOIN 
                UserQualifications uq ON q.qualification_id = uq.qualification_id
            WHERE 
                q.expertise_id = $1 AND uq.user_id = $2`,
            [expertise_id, user_id]
        );
        return res.rows;
    } catch (error) {
        console.error('Error executing query', error);
        throw error;
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