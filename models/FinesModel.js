const mongoose = require("mongoose");

const Fines = new mongoose.Schema(
  {
    fineDate: {
      type: String,
    },
    Amount: {
      type: Number,
    },
    location: {
      type: String,
    },
    VehiclePate: {
      type: String,
    },
    driverEmail: {
      type: String,
    },
  },
  { timestamps: true }
);

const fineModel = new mongoose.model("fine", Fines);

module.exports = fineModel;
