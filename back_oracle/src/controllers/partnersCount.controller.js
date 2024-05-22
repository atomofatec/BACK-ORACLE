const partnersCount = require("../models/partnersCount.model");

//gera a resposta json e depois pegamos os dados
exports.partnersCount = async (req, res) => {
    try {
        this.partnersCount().then((result) => {
            res.status(200).json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

