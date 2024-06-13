const tracksController = require("../controllers/tracks.controller");

module.exports = (app) => {
  const router = require("express").Router();

  router.get("/tracks", tracksController.getAllTracks);

  app.use("/api", router);
};