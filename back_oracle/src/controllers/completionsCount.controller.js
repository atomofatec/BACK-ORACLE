const completionsCountModel = require("../models/completionsCount.model");

const listagemCompletionsCount = async (req, res) => {
    try {
        const result = await completionsCountModel.getCompletionsCount();
        res.status(200).json(result);
    } catch (error) {
        console.error("Erro ao listar contagem de conclusões: ", error);
        res.status(500).send(
            "Houve um problema ao listar a contagem de conclusões"
        );
    }
};

module.exports = { listagemCompletionsCount };