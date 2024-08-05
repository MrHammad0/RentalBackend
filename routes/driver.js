const express = require("express");
const {
  createDriver,
  getdriver,
  delDriver,
  updateDriver,
} = require("../controller/drivercontroller");
const driverRoute = express.Router();
driverRoute.post("/createdriver", createDriver);
driverRoute.get("/getdriver/:id", getdriver);
driverRoute.delete("/deldriver/:id", delDriver);
driverRoute.patch("/updatedriver/:id", updateDriver);

module.exports = driverRoute;
