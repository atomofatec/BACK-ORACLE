module.exports = (app) => {
    const completionsCountController = require("../controllers/completionsCount.controller");
    const router = require("express").Router();

    router.get(
        "/completionsCount",
        completionsCountController.listagemCompletionsCount
    );

    app.use("/api", router);
};