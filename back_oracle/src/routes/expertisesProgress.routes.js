
module.exports = (app) => {
  const getExpertisesProgress = require('../models/expertisesProgress.model');

  var router = require("/expertises", getExpertisesProgress)

  app.use('/api', router);
}