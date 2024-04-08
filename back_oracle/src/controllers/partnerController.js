const partnerModel = require('../models/partnerModel');

exports.createPartner = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const partner = await partnerModel.createPartner(name, email, password);
    res.status(201).json(partner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};
