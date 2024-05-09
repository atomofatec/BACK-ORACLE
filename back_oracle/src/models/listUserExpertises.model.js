const sql = require('../db')

const listUserExpertises = async () => {
    const result = await sql.query(`
      SELECT 
          u.user_name,
          e.total_test_grade AS expertise
      FROM 
          users u
      JOIN 
          Expertises e ON u.user_id = e.user_id
    `);
    return result.rows;
};

module.exports = listUserExpertises;
