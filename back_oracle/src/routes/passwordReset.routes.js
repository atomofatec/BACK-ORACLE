const passwordResetController = require("../controllers/passwordReset.controller");
const router = require("express").Router();

router.post("/password-reset-request", passwordResetController.requestPasswordReset);
router.post("/reset-password", passwordResetController.resetPassword);

module.exports = (app) => {
    app.use("/api", router);
};
