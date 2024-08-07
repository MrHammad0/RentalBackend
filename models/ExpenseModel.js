const mongoose = require("mongoose");

const Expense = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    catgory: {
      type: String,
    },
    amount: {
      type: String,
    },
    vehiclePlate: {
      type: String,
    },
    vehicle: {
      type: String,
    },
  },
  { timestamps: true }
);

const expenseModel = new mongoose.model("expense", Expense);

module.exports = expenseModel;
