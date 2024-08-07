const RentalModel = require("../models/RentalModel");

//create rent report
exports.createRent = async (req, res) => {
  try {
    const {
      startdate,
      enddate,
      driverName,
      email,
      vehicle,
      vehiclePlate,
      rate,
      days,
      totolCost,
    } = req.body;
    const rent = new RentalModel(req.body);
    await rent.save();
    return res.status(200).json({
      message: "rent Report Created",
      rent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internel server error",
      error,
    });
  }
};

//delete rent report
exports.deleteRent = async (req, res) => {
  try {
    const { id } = req.params;
    const rent = await RentalModel.findByIdAndDelete(id);
    if (!rent) {
      return res.status(404).json({
        message: "rent Detail not found",
      });
    } else {
      return res.status(200).json({
        message: "rent report deleted successfully",
        rent,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//update rent report
exports.updateRent = async (req, res) => {
  try {
    const { id } = req.params;
    const rent = await RentalModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!rent) {
      return res.status(404).json({
        message: "rent Detail not found",
      });
    } else {
      return res.status(200).json({
        message: "rent updated",
        rent,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internel Server Error",
      error,
    });
  }
};

//get all rent information related to icome
exports.getAllRent = async (req, res) => {
  try {
    const rent = await RentalModel.find();
    return res.status(200).json({
      message: "All rent are there",
      rent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internel server error",
      error,
    });
  }
};

//get single rent info
exports.getSingleRent = async (req, res) => {
  try {
    const { id } = req.params;
    const rent = await RentalModel.findById(id);
    if (!rent) {
      return res.status(404).json({
        message: "rent details not found",
      });
    } else {
      return res.status(200).json({
        message: "rent detail",
        rent,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internel Server error",
    });
  }
};
