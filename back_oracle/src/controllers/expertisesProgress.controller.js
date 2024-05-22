const expertisesProgress = require("../models/expertisesProgress.model");

//gera a resposta json e depois pegamos os dados
exports.expertisesProgress = async (req, res) => {
    try {
        this.expertisesProgress().then((result) => {
            res.status(200).json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

