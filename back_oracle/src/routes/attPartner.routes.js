// routesLogin.js
const express = require('express');
const router = express.Router();
const PartnerController = require('../controllers/attPartner.controller');

// Rota para atualizar um parceiro
router.put('/partners/:id', PartnerController.updatePartner);

module.exports = router;