const mongoose = require("mongoose");

const complaint = new mongoose.Schema(
  {
    VehiclePlate: {
      type: String,
    },
    driverName: {
      type: String,
    },
    Email: {
      type: String,
    },
    InspectionDate: {
      type: String,
    },
    Issus: {
      type: String,
    },
    ResolutionDate: {
      type: String,
    },
  },
  { timestamps: true }
);

const complaintModel = new mongoose.model("complaint", complaint);

module.exports = complaintModel;
