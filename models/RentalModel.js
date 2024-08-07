const mongoose = require("mongoose");

const Rental = new mongoose.Schema(
  {
    startdate: {
      type: Date,
      default: Date.now,
    },
    enddate: {
      type: Date,
      default: Date.now,
    },
    driverName: {
      type: String,
    },
    email: {
      type: String,
    },
    vehicle: {
      type: String,
    },
    vehiclePlate: {
      type: String,
    },
    rate: {
      type: String,
    },
    days: {
      type: String,
    },
    totolCost: {
      type: String,
    },
  },
  { timestamps: true }
);

const RentalModel = new mongoose.model("rental", Rental);

module.exports = RentalModel;
