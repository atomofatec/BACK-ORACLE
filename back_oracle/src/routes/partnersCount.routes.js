module.exports = (app) => {
    const partnersCountController = require("../controllers/partnersCount.controller");
    const router = require("express").Router();

    router.get("/partnersCount", partnersCountController.listPartnersCount);

    app.use("/api", router);
};