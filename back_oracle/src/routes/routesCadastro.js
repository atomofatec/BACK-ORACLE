const express = require('express');
const router = express.Router();
const UserController = require('../controllers/cadastro');

// Rota para cadastro de usuário
router.post('/cadastro', UserController.createUser);

module.exports = router;