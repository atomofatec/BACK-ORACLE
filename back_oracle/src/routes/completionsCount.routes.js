module.exports = (app) => {
  const completionsCount = require('../controllers/completionsCount.controller');

  var router = require("express").Router();

  router.get("/completionsCount", completionsCount.findAll);

  app.use('/api', router);

}