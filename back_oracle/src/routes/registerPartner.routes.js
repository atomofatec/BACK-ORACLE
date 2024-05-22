module.exports = (app) => {
    const partnerController = require("../controllers/registerPartner.controller");

    var router = require("express").Router();

    router.post("/registerPartner", partnerController.createPartner);

    router.post("/selectExpertise", partnerController.selectExpertise);

    router.get("/expertiseList", partnerController.returnExpertises)
    
    router.get("/qualificationList", partnerController.returnQualifications)

    app.use("/api", router);
};