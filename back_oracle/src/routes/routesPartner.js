// partnerRoutes.js
module.exports = (app) => {
    const partnerController = require("../controllers/partnerController");

    var router = require("express").Router();

    router.post("/register", partnerController.createPartner);

    app.use("/api", router);
}
