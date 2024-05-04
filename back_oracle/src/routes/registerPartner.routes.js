module.exports = (app) => {
    const partnerController = require("../controllers/registerPartner.controller");

    var router = require("express").Router();

    router.post("/registerPartner", partnerController.createPartner);

    router.post("/updateTest", partnerController.updateTest);

    router.post("/selectExpertise", partnerController.selectExpertise);

    app.use("/api", router);
};