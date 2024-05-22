const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/:user_id/program-tracks', userController.getUserProgramTracks);

module.exports = (app) => {
  app.use('/api/users', router);
};
