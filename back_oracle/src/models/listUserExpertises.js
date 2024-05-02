const pool = require('./database');

const listUserExpertises = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query(`
      SELECT 
          u.user_name,
          e.total_test_grade AS expertise
      FROM 
          Users u
      JOIN 
          Expertises e ON u.user_id = e.user_id
    `);
    return result.rows;
  } finally {
    client.release();
  }
};

module.exports = listUserExpertises;
