module.exports = (app) => {
    const deleteUsersController = require("../controllers/deleteUsers.controller");
    const router = require("express").Router();

    router.delete("/users/:id", deleteUsersController.deleteUser);

    app.use("/api", router);
};