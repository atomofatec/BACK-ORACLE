const qualificationsStatus = require('../models/partnersCount.model')

//gera a resposta json e depois pegamos os dados
exports.qualificationsStatus = async (req, res) => {
    try {
        this.qualificationsStatus().then((result) => {
            res.status(200).json(result);
        });
    } catch (error) {
        console.log(error);
    }
}

