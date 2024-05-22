const completionsCount = require("../models/completionsCount.model");

//gera a resposta json e depois pegamos os dados
exports.listagemCompletionsCount = async (req, res) => {
    try {
        completionsCount().then((result) => {
            res.status(200).json(result);
        });
    } catch (error) {
        console.log(error);
    }
}