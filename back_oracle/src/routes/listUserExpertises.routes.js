module.exports = (app) => {
    const listagemUserExpertises = require("../controllers/listUsersExpertises.controller");

    var router = require("express").Router();

    router.get("/listUserExpertises", listagemUserExpertises.listagemUserExpertises);

    app.use("/api", router);
};
