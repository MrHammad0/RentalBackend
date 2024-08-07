const mongoose = require("mongoose");

const Milage = new mongoose.Schema(
  {
    kilometer: {
      type: String,
    },
    vehicle: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
      },
    ],
  },
  { timestamps: true }
);

const MilageModel = new mongoose.model("milage", Milage);

module.exports = MilageModel;
