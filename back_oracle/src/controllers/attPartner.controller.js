// PartnerController.js
const PartnerModel = require('../models/attPartner.model');

const updatePartner = async (req, res) => {
  const partnerId = req.params.id;
  const partnerUpdates = req.body;

  try {
    // Verifica se o parceiro existe no banco de dados
    const partner = await PartnerModel.findPartnerById(partnerId);
    if (!partner) {
      return res.status(404).send('Parceiro não encontrado');
    }

    // Atualiza as informações do parceiro
    await PartnerModel.updatePartner(partnerId, partnerUpdates);

    res.status(200).send('Parceiro atualizado com sucesso');
  } catch (error) {
    console.error("Erro ao atualizar parceiro: ", error);
    res.status(500).send("Houve um problema ao atualizar o parceiro");
  }
};

module.exports = { updatePartner };