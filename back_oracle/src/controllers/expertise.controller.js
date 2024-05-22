const Expertise = require('../models/expertise.model');

const getExpertisesByTrack = async (req, res) => {
  const { track_id } = req.params;
  try {
    const expertises = await Expertise.getExpertisesByTrackId(track_id);
    res.json(expertises);
  } catch (error) {
    console.error('Error fetching expertises:', error);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getExpertisesByTrack
};
