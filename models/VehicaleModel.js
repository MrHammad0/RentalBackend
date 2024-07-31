const mongoose = require("mongoose");

const Vehicle = new mongoose.Schema(
  {
    vehicleName: {
      type: String,
    },
    make: {
      type: String,
      description: "Manufacturer of the vehicle",
    },
    model: {
      type: String,
      description: "Model of the vehicle",
    },
    year: {
      type: String,
      description: "Manufacture year of the vehicle",
    },
    numberPlate: {
      type: String,
    },
    color: {
      type: String,
      description: "Color of the vehicle",
    },
    mileage: {
      type: String,
      description: "Mileage of the vehicle in kilometers",
    },
    fuelType: {
      type: String,

      description: "Type of fuel used by the vehicle",
    },
    doors: {
      type: String,
      description: "Number of doors on the vehicle",
    },
    seats: {
      type: String,
      description: "Number of seats in the vehicle",
    },
    price: {
      type: String,
      description: "Price of the vehicle",
    },
  },
  { timestamp: true }
);

const VehicleModel = new mongoose.model("vehicle", Vehicle);

module.exports = VehicleModel;
