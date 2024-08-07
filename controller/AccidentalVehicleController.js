const express = require("express");
const AccidentModel = require("../models/AccidentModel");

//Register Accidental Vehicale
exports.createAccidentVehicle = async (req, res) => {
  try {
    const data = new AccidentModel({
      VehicleName: req.body.VehicleName,
      VehicleNumber: req.body.VehicleNumber,
      DriverInfo: req.body.DriverInfo,
      AccidentLocation: req.body.AccidentLocation,
      AccidentDate: req.body.AccidentDate,
      DamageInfo: req.body.DamageInfo,
      Expense: req.body.Expense,
    });

    await data.save();
    return res.status(200).json({
      status: "success",
      message: "Accident Register successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: "Internel server error" });
  }
};

//delete Accidental Vechicle
exports.deleteAccidentVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await AccidentModel.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Accidental Vehicle deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
      error,
    });
  }
};

//Get all Accidental Vehicle
exports.getAllAccidentVehicle = async (req, res) => {
  try {
    const vehicle = await AccidentModel.find();
    res.status(200).json({
      status: "Success",
      message: "All Accidental Vehicle",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
      error,
    });
  }
};

//Get single Accidental Vehicle
exports.getSingleAccidentVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = new AccidentModel.findById(id);
    if (!vehicle) {
      res.status(404).json({
        message: "Vehcile not found",
        vehicle,
      });
    } else {
      res.status(201).json({
        message: "vehicle found",
        vehicle,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internel Server error",
      error,
    });
  }
};

//update Accidental Vehicle
exports.UpdateAccidentalVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = new AccidentModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!vehicle) {
      res.status(404).json({
        message: "Vehicle not found",
        vehicle,
      });
    } else {
      res.status(201).json({
        message: "Vehicle updated successfully",
        vehicle,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
      error,
    });
  }
};
