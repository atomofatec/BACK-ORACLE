module.exports = (app) => {
    const PartnerController = require("../controllers/attPartner.controller");
    var router = require("express").Router();

    // Rota para atualizar um parceiro
    router.put("/partners/:id", PartnerController.updatePartner);

    app.use("/api", router);
};