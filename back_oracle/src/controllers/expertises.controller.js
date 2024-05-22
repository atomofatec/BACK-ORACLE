const expertises = require("../models/expertises.model");

//gera a resposta json e depois pegamos os dados
exports.expertises = async (req, res) => {
    try {
        expertises().then((result) => {
            res.status(200).json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

