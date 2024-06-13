module.exports = (app) => {
    const partnerController = require("../controllers/registerPartner.controller");

    var router = require("express").Router();

    router.post("/registerPartner", partnerController.createPartner);

    router.post("/selectExpertise", partnerController.selectExpertise);

    router.get("/expertiseList", partnerController.returnExpertises);
    
    router.get("/qualificationList", partnerController.returnQualifications);

    router.post("/userQualifications", partnerController.updateUserQualifications);

    router.post("/userTracks", partnerController.updateUserTracks);

    router.post("/userExpertises", partnerController.updateUserExpertises);
    
    router.post("/tracksById/:user_id", partnerController.selectTracks);

    app.use("/api", router);
};