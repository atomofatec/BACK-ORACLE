const express = require('express');
const { getCompletionsCount } = require('../models/completionsCount');

const router = express.Router();

router.get('/tracks/completions-count', async (req, res) => {
  try {
    const completionsCount = await getCompletionsCount();
    res.json(completionsCount);
  } catch (error) {
    console.error('Error fetching completions count:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
