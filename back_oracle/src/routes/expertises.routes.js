const express = require('express');
const { getExpertises } = require('../models/expertises');

const router = express.Router();

router.get('/expertises', async (req, res) => {
  try {
    const expertises = await getExpertises();
    res.json(expertises);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
