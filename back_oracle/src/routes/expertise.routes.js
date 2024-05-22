const express = require('express');
const router = express.Router();
const expertiseController = require('../controllers/expertise.controller');

router.get('/:track_id', expertiseController.getExpertisesByTrack);

module.exports = (app) => {
    app.use('/api/expertises', router);
};
