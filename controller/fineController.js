const express = require("express");
const fineModel = require("../models/FinesModel");

//create fine registeration
exports.createFine = async (req, res) => {
  try {
    const { fineDate, Amount, location, VehiclePate, driverEmail } = req.body;
    const fine = new fineModel(req.body);
    await fine.save();
    req.status(200).json({
      message: "Fine register successfully",
      fine,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error,
    });
  }
};

//delete fine
exports.deleteFine = async (req, res) => {
  try {
    const { id } = req.params;
    const fine = new fineModel.findByIdAndDelete(id);
    if (!fine) {
      return res.status(404).json({ message: "Fine not found" });
    } else {
      return res.status(200).json({ message: "Fine deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internel Server Error",
      error,
    });
  }
};

//updatefine
exports.updateFine = async (req, res) => {
  try {
    const { id } = req.params;
    const fine = new fineModel.fineByIdAndUpdate(id, req.body, { new: true });
    if (!fine) {
      return res.status(404).json({ message: "Fine not found" });
    } else {
      return res.status(200).json({ message: "Fine updated successfully" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internel Server Error",
      error,
    });
  }
};

//get all fine
exports.getAllFine = async (req, res) => {
  try {
    const fine = await fineModel.find();
    if (!fine) {
      res.status(404).json({
        message: "No fine found",
      });
    } else {
      res.status(200).json({
        message: "All fine found",
        fine,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internel server error",
      error,
    });
  }
};

//get single fine details
exports.getSingleFine = async (req, res) => {
  try {
    const { id } = req.params;
    const fine = await fineModel.findById(id);
    if (!fine) {
      return res.status(404).json({
        message: "fine detail not foud",
      });
    } else {
      return res.status(201).json({
        message: "fine detail found",
        fine,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internel Server error",
      error,
    });
  }
};
