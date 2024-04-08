// partnerController.js
const Partner = require('../models/partnerModel');

const partnerController = {
    createPartner: async (req, res) => {
        const { name, email, password } = req.body;

        try {
            // Cria um novo parceiro
            const newPartner = await Partner.create(name, email, password);
            
            // Retorna o parceiro criado
            res.status(201).json(newPartner);
        } catch (error) {
            // Se houver um erro, retorna uma mensagem de erro
            res.status(500).json({ error: 'Erro ao criar parceiro' });
        }
    }
};

module.exports = partnerController;
