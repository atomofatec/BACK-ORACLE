module.exports = (app) => {
    const expertisesProgressController = require("../controllers/expertisesProgress.controller");
    const router = require("express").Router();

    router.get(
        "/expertisesProgress",
        expertisesProgressController.listExpertisesProgress
    );

    app.use("/api", router);
};