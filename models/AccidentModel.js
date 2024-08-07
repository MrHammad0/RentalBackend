const mongoose = require("mongoose");

const AccidentVehicle = new mongoose.Schema(
  {
    VehicleName: {
      type: String,
    },
    VehicleNumber: {
      type: String,
    },
    DriverInfo: {
      type: String,
    },
    AccidentLocation: {
      type: String,
    },
    AccidentDate: {
      type: Date,
      default: Date.now,
    },
    DamageInfo: {
      type: String,
    },
    Expense: {
      type: Number,
    },
  },
  { timestamps: true }
);

const AccidentModel = mongoose.model("AccidentVehicle", AccidentVehicle);

module.exports = AccidentModel;
