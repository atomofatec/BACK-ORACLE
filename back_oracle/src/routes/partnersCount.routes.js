module.exports = (app) => {
  const getPartnersCount = require('../models/partnersCount.model')

  var router = require("/partnersCount", getExpertisesProgress)

  app.use('/api', router);
}