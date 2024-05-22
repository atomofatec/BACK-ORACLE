const expertisesModel = require("../models/expertises.model");

const listExpertises = async (req, res) => {
    try {
        const result = await expertisesModel.getExpertises();
        res.status(200).json(result);
    } catch (error) {
        console.error("Erro ao listar especialidades: ", error);
        res.status(500).send("Houve um problema ao listar as especialidades");
    }
};

module.exports = { listExpertises };