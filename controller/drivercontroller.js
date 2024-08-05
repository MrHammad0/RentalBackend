const driverModel = require("../models/Driver");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const createDriver = async (req, res) => {
  //   const hashpassword = await bcrypt.hash(req.body.password, 10);
  try {
    const regiterdriver = new driverModel({
      username: req.body.username,
      email: req.body.email,
      licensenumber: req.body.licensenumber,
      phonenumber: req.body.phonenumber,
      dateofbirth: req.body.dateofbirth,
      hiredate: req.body.hiredate,
      additionalnotes: req.body.additionalnotes,
      selectfile: req.body.selectfile,
    });
    // if (!username,!email) {

    // }
    await regiterdriver.save();
    res.status(201).json({
      success: true,
      message: "user created",
      regiterdriver,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "some error coming",
      err: error,
    });
  }
};
const getdriver = async (request, response) => {
  try {
    const { id } = request.params;
    const driver = await driverModel.findById(id);
    // console.log.driver);
    if (!driver) {
      response.status(404).json({ message: "user not found" });
    }
    response.status(201).json({
      success: true,
      message: `this id ${id} driver is`,
      driver,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
      err: error,
    });
  }
};

const delDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await driverModel.findByIdAndDelete(id);
    if (!driver) {
      response.status(404).json({ message: "user not found" });
    }
    res.status(201).json({
      success: true,
      message: `this id ${id} has been deleted successfully`,
      driver,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "some error coming",
      err: error,
    });
  }
};
const updateDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const updatePerson = await driverModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatePerson) {
      response.status(404).json({ message: "user not found" });
    }
    res.status(201).json({
      success: true,
      message: `this id ${id} has been updated successfully`,
      updatePerson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "some error coming",
      err: error,
    });
  }
};
module.exports = {
  createDriver,
  getdriver,
  delDriver,
  updateDriver,
};
