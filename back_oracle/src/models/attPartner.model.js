// partner.js
const connection = require('../db/index');

const PartnerModel = {
  // Função para encontrar um parceiro pelo ID
  findPartnerById: async (partnerId) => {
    const query = 'SELECT * FROM users WHERE user_id = $1';
    const partner = await connection.query(query, [partnerId]);
    return partner.rows[0];
  },
  
  // Função para atualizar as informações de um parceiro
  updatePartner: async (partnerId, partnerUpdates) => {
    const { name, email } = partnerUpdates;
    const updatedAt = new Date();
    const query = 'UPDATE users SET user_name = $1, email = $2, updatedAt = $3 WHERE user_id = $4';
    await connection.query(query, [name, email, updatedAt, partnerId]);
  }
};

module.exports = PartnerModel;