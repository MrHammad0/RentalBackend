const express = require("express");
const {
  createAdmin,
  delAdmin,
  updateAdmin,
  getAdmin,
  loginAdmin,
} = require("../controller/admincontroller");
const adminRoute = express.Router();

adminRoute.post("/createAdmin", createAdmin);
adminRoute.post("/loginAdmin", loginAdmin);
adminRoute.delete("/deletAdmin/:id", delAdmin);
adminRoute.patch("/updateAdmin/:id", updateAdmin);
adminRoute.get("/getSingleAdmin/:id", getAdmin);

module.exports = adminRoute;
