const mongoose = require("mongoose");

const Maintenane = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
    },
    cost: {
      type: String,
    },
    vehiclePlate: {
      type: String,
    },
  },
  { timestamps: true }
);

const MaintenanceModel = new mongoose.model("maintenance", Maintenane);

module.exports = MaintenanceModel;
