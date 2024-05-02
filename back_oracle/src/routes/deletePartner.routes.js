module.exports = (app) => {
    const deletePartnerController = require("../controllers/deletePartner.controller");
    const router = require("express").Router();

    router.delete("/partners/:id", deletePartnerController.deletePartner);

    app.use("/api", router);
};