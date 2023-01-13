const express = require("express");
const atdSensorData = require("../data/atdSensorData");
const atdSensorRouter = express.Router();

// Rest APIs
atdSensorRouter.get("/", function (req, res) {
  res.json({ atdSensorData });
});

module.exports = atdSensorRouter;
