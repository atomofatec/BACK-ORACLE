const qualificationsStatusModel = require("../models/qualificationsStatus.model");

const listQualificationsStatus = async (req, res) => {
    try {
        const result =
            await qualificationsStatusModel.getQualificationsStatus();
        res.status(200).json(result);
    } catch (error) {
        console.error("Erro ao listar status das qualificações:", error);
        res.status(500).send(
            "Houve um problema ao listar o status das qualificações"
        );
    }
};

module.exports = { listQualificationsStatus };