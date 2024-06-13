//const express = require('express');

// const router = express.Router();

// router.put('/users/:userId/password', updatePasswordController.updatePassword);

// module.exports = router;

module.exports = (app) => {
    const updatePasswordController = require("../controllers/updatePassword.controller");

    var router = require("express").Router();

    router.put(
        "/users/:userId/password",
        updatePasswordController.updatePassword
    );

    app.use("/api", router);
};