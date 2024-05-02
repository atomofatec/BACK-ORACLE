// partner.js
const connection = require('../db/index');

const PartnerModel = {
  // Função para encontrar um parceiro pelo ID
  findPartnerById: async (partnerId) => {
    const query = 'SELECT * FROM partners WHERE id = $1';
    const partner = await connection.query(query, [partnerId]);
    return partner.rows[0];
  },

  // Função para atualizar as informações de um parceiro
  updatePartner: async (partnerId, partnerUpdates) => {
    const { name, email } = partnerUpdates;
    const query = 'UPDATE partners SET name = $1, email = $2 WHERE id = $4';
    await connection.query(query, [name, email, partnerId]);
  }
};

module.exports = PartnerModel;