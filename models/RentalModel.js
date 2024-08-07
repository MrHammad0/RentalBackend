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
    rate: {
      type: String,
    },
    days: {
      type: String,
    },
    totolCost: {
      type: String,
    },
    vehicle: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
      },
    ],
    driver: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "driver",
      },
    ],
  },
  { timestamps: true }
);

const RentalModel = new mongoose.model("rental", Rental);

module.exports = RentalModel;
