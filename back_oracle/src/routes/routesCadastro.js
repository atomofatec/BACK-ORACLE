module.exports = (app) => {
    const cadastro = require("../controllers/cadastro");

    var router = require("express").Router();

    router.post("/cadastro", cadastro.createUser);

    app.use("/api", router);

}

// const express = require('express');
// const router = express.Router();
// const UserController = require('../controllers/cadastro');

// // Rota para cadastro de usuário
// router.post('/cadastro', UserController.createUser);

// module.exports = router;