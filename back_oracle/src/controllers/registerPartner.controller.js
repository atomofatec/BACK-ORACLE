// partnerController.js
const Partner = require("../models/registerPartner.model");

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
            res.status(500).json({ error: "Erro ao criar parceiro" });
        }
    },

    updateTest: async (req, res) => {
        try {
            const { userId, trackId, testNumber, testGrade } = req.body;
            const updatedTest = await Partner.update(userId, trackId, testNumber, testGrade);
            
            res.status(201).json(updatedTest)
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    selectExpertise: async (req, res) => {
        try {
            const { trackId } = req.body;
            const expertisesWithUser = await Partner.selectWithUser(trackId);
            
            res.status(200).json(expertisesWithUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }    
    }

};

module.exports = partnerController;