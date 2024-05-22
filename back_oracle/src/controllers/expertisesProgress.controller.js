const expertisesProgressModel = require("../models/expertisesProgress.model");

const listExpertisesProgress = async (req, res) => {
    try {
        const result = await expertisesProgressModel.getExpertisesProgress();
        res.status(200).json(result);
    } catch (error) {
        console.error("Erro ao listar progresso das especialidades: ", error);
        res.status(500).send(
            "Houve um problema ao listar o progresso das especialidades"
        );
    }
};

module.exports = { listExpertisesProgress };