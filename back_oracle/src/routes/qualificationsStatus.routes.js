const { getQualificationsStatus } = require('../models/qualificationsStatus');

const router = express.Router();

router.get('/qualifications/status', async (req, res) => {
  try {
    const qualificationsStatus = await getQualificationsStatus();
    res.json(qualificationsStatus);
  } catch (error) {
    console.error('Error fetching qualifications status:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;


module.exports = (app) => {
  const getQualificationsStatus = require('../models/qualificationsStatus.model')

  var router = require("/qualificationsStatus", getQualificationsStatus)
}

app.use('/api', router);
