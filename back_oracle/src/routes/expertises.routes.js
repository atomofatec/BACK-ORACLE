module.exports = (app) => { 
  const getExpertises = require('../models/expertises.model');

  var router = require("express").Router();

  router.get("/expertises", getExpertises.findAll);

  app.use('/api', router);

}

