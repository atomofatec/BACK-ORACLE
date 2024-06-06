const express = require('express');
const updatePasswordController = require('../controllers/updatePassword.controller');

const router = express.Router();

router.put('/users/:userId/password', updatePasswordController.updatePassword);

module.exports = router;
