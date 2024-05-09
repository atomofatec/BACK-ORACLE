const listUserExpertises = require("../models/listUserExpertises.model");

exports.listagemUserExpertises = async (req, res) => {
    try {
        listUserExpertises().then((result) => {
            res.status(200).json(result);
        });
    } catch (error) {
        console.log(error);
    }
};
