module.exports = (app) => {
    const partnerController = require("../controllers/registerPartner.controller");

    var router = require("express").Router();

    router.post("/register", partnerController.createPartner);

    app.use("/api", router);
};