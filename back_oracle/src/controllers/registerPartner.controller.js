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

    selectExpertise: async (req, res) => {
        try {
            const { user_id } = req.body;
            const expertisesWithUser = await Partner.selectWithUser(user_id);
            
            res.status(200).json(expertisesWithUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }    
    },

    returnExpertises: async(req, res) => {
        try {
            // Chama o método no modelo Partner para obter a lista de expertises
            const expertises = await Partner.expertiseList();
            // Responde com os dados selecionados
            res.status(200).json(expertises);
        } catch (error) {
            console.error("Erro ao retornar expertises:", error.message);
            res.status(500).json({ error: "Erro ao retornar expertises" });
        }
    },

    returnQualifications: async(req, res) => {
        try {
            // Chama o método no modelo Partner para obter a lista de expertises
            const qualifications = await Partner.qualificationList();
            // Responde com os dados selecionados
            res.status(200).json(qualifications);
        } catch (error) {
            console.error("Erro ao retornar qualifications:", error.message);
            res.status(500).json({ error: "Erro ao retornar qualifications" });
        }
    }

};

module.exports = partnerController;