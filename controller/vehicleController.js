const express = require("express");
const VehicleModel = require("../models/vehicaleModel");
const app = express();

//create vehicle
exports.createVehicle = async (req, res) => {
  try {
    const {
      vehicleName,
      make,
      model,
      year,
      color,
      mileage,
      numberPlate,
      fuelType,
      doors,
      seats,
      price,
    } = req.body;
    const vehicle = new VehicleModel({
      vehicleName,
      make,
      model,
      year,
      numberPlate,
      color,
      mileage,
      fuelType,
      doors,
      seats,
      price,
    });
    const existVehicle = await VehicleModel.findOne({ numberPlate });

    if (!existVehicle) {
      await vehicle.save();
      res.status(200).json({
        success: true,
        message: "vehicle created successfully",
        vehicle,
      });
    } else {
      return res.status(400).json({ message: "vehicle already exist" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

//update vehicle
exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await VehicleModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!vehicle) {
      return res.status(404).json({ message: "vehicle not found" });
    }
    res.status(200).send(vehicle);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

//get all vehicle
exports.getAllVehicle = async (req, res) => {
  try {
    const vehicle = await VehicleModel.find();
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

// get single vehicle
exports.getSingleVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await VehicleModel.findById(id);
    if (!vehicle) {
      return res.status(404).json({ message: "vehicle not found" });
    } else {
      res.status(200).json({
        message: "Vehicle found",
        vehicle,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

// delete vehicle
exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await VehicleModel.findByIdAndDelete(id);
    if (!vehicle) {
      return res.status(404).json({ message: "vehicle not found" });
    } else {
      res.status(200).json({
        message: "Vehicle deleted",
        vehicle,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
