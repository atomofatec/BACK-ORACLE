module.exports = (app) => {
    const listagemUsers = require("../controllers/listUsers.controller");

    var router = require("express").Router();

    router.get("/listUsers", listagemUsers.listagemUsers);

    app.use("/api", router);
};