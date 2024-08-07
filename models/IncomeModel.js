const mongoose = require("mongoose");

const Income = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    source: {
      type: String,
    },
    amount: {
      type: String,
    },
    drivePay: {
      type: String,
    },
    vehicle: {
      type: String,
    },
    driver: {
      type: String,
    },
  },
  { timestamps: true }
);

const IncomeModel = new mongoose.model("income", Income);

module.exports = IncomeModel;
