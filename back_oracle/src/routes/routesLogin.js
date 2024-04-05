// authRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/login');

router.post('/login', UserController.loginUser);

module.exports = router;