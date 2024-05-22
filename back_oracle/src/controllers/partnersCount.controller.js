const partnersCountModel = require("../models/partnersCount.model");

const listPartnersCount = async (req, res) => {
    try {
        const result = await partnersCountModel.getPartnersCount();
        res.status(200).json(result);
    } catch (error) {
        console.error("Erro ao listar contagem de parceiros: ", error);
        res.status(500).send(
            "Houve um problema ao listar a contagem de parceiros"
        );
    }
};

module.exports = { listPartnersCount };