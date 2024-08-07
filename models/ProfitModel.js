const mongoose = require("mongoose");

const profit = new mongoose.Schema(
  {
    totalIncome: {
      type: String,
    },
    totalExpense: {
      type: String,
    },
    profit: {
      type: String,
    },
  },
  { timestamps: true }
);

const profitModel = new mongoose.model("profit", profit);

module.exports = profitModel;
