const express = require('express');
const { getExpertisesProgress } = require('../models/expertisesProgress');

const router = express.Router();

router.get('/tracks/expertises-progress', async (req, res) => {
  try {
    const expertisesProgress = await getExpertisesProgress();
    res.json(expertisesProgress);
  } catch (error) {
    console.error('Error fetching expertises progress:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
