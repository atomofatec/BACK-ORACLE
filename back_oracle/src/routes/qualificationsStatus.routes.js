module.exports = (app) => {
    const qualificationsStatusController = require("../controllers/qualificationsStatus.controller");
    const router = require("express").Router();

    router.get(
        "/qualifications/status",
        qualificationsStatusController.listQualificationsStatus
    );

    app.use("/api", router);
};