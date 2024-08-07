const IncomeModel = require("../models/IncomeModel");

//create icome report
exports.createIncome = async (req, res) => {
  try {
    const { date, source, amount, drivePay, vehicle, driver } = req.body;
    const income = new IncomeModel(req.body);
    await income.save();
    return res.status(200).json({
      message: "Income Report Created",
      income,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internel server error",
      error,
    });
  }
};

//delete income report
exports.deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const income = await IncomeModel.findByIdAndDelete(id);
    if (!income) {
      return res.status(404).json({
        message: "Icome Detail not found",
      });
    } else {
      return res.status(200).json({
        message: "Income report deleted successfully",
        income,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//update income report
exports.updateIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const income = await IncomeModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!income) {
      return res.status(404).json({
        message: "Income Detail not found",
      });
    } else {
      return res.status(200).json({
        message: "Income updated",
        income,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internel Server Error",
      error,
    });
  }
};

//get all icome information related to icome
exports.getAllIncome = async (req, res) => {
  try {
    const income = await IncomeModel.find();
    return res.status(200).json({
      message: "All user are there",
      income,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internel server error",
      error,
    });
  }
};

//get single income info
exports.getSingleIncome = async (req, res) => {
  try {
    const { id } = req.params;
    const income = await IncomeModel.findById(id);
    if (!income) {
      return res.status(404).json({
        message: "Income details not found",
      });
    } else {
      return res.status(200).json({
        message: "Income detail",
        income,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internel Server error",
    });
  }
};
