const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const atdSensorRouter = require("./router/atdSensor");

const PORT = process.env.PORT || 3001;

const app = express();

// Use body parser
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Routers
//Use the Router on the sub route /atdSensor
app.use("/atdSensor", atdSensorRouter);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Server listening to PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
