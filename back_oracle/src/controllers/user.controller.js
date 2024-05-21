const User = require('../models/user.model');

const getUserProgramTracks = async (req, res) => {
  const { user_id } = req.params;
  try {
    const programTracks = await User.getUserProgramTracks(user_id);
    res.json(programTracks);
  } catch (error) {
    console.error('Error fetching user program tracks:', error);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getUserProgramTracks
};
