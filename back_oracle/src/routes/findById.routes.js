module.exports = (app) => {
    const userController = require("../controllers/findById.controller");
    const router = require("express").Router();

    router.get("/:userId", userController.getUserById);

    app.use("/api", router);
};
