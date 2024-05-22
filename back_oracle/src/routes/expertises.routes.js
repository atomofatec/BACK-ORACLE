module.exports = (app) => {
    const expertisesController = require("../controllers/expertises.controller");
    const router = require("express").Router();

    router.get("/expertises", expertisesController.listExpertises);

    app.use("/api", router);
};