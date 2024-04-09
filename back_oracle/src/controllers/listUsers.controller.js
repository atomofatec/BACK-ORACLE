const listUsers = require("../models/listUsers.model");

//gera a resposta json e depois pegamos os dados
exports.listagemUsers = async (req, res) => {
    try {
        listUsers().then((result) => {
            res.status(200).json(result);
        });
    } catch (error) {
        console.log(error);
    }
};