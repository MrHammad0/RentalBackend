const mongoose = require("mongoose");

const financial = new mongoose.Schema(
  {
    taxes: {
      type: String,
    },
    income: {
      type: String,
    },
    expense: {
      type: String,
    },
    profitable: {
      type: String,
    },
    grossProfit: {
      type: String,
    },
    opertaingExpense: {
      type: String,
    },
  },
  { timestamps: true }
);

const financeModel = new mongoose.model("finance", financial);

module.exports = financeModel;
