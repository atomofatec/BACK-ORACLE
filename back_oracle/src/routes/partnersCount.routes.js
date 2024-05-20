const express = require('express');
const { getPartnersCount } = require('../models/partnersCount');

const router = express.Router();

router.get('/tracks/partners-count', async (req, res) => {
  try {
    const partnersCount = await getPartnersCount();
    res.json(partnersCount);
  } catch (error) {
    console.error('Error fetching partners count:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
