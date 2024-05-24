
const express = require("express");
const router = express.Router();
const expertiseController = require("../controllers/listagensGerais.controller");

router.get(
    "/listarExpertises/:track_id",
    expertiseController.getExpertisesByTrack
);

router.get(
    "/listarQualifications/:expertise_id",
    expertiseController.getQualificationsByExpertiseId
);

router.post(
    "/expertiseProgressByUserAndTrack",
    expertiseController.getExpertiseProgressByUserAndTrack
);

module.exports = (app) => {
    app.use("/api/", router);
};