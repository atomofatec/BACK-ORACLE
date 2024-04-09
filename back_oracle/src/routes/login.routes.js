module.exports = (app) => {
    const userLogin = require("../controllers/login.controller");

    var router = require("express").Router();

    router.post("/login", userLogin.login); // Rota de login

    app.use("/api", router); // Define a rota base para as rotas
};