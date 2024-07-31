const adminModel = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const transporter = require("../middleware/transporter");

const createAdmin = async (req, res) => {
  const hashpassword = await bcrypt.hash(req.body.password, 10);
  try {
    const regiteradmin = new adminModel({
      name: req.body.name,
      email: req.body.email,
      password: hashpassword,
    });
    await regiteradmin.save();
    res.status(201).json({
      success: true,
      message: "user created",
      regiteradmin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "some error coming",
      err: error,
    });
  }
};
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "all felid required" });
    }
    const Admin = await adminModel.findOne({ email });
    if (!Admin) {
      return res.status(400).json({ message: "user email not found" });
    }
    const ispasswordVaild = await bcrypt.compare(password, Admin.password);
    if (!ispasswordVaild) {
      return res.status(402).json({ message: "invaild password" });
    }
    const token = jwt.sign(
      { userId: Admin._id, email: Admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      success: true,
      data: Admin,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAdmin = async (request, response) => {
  try {
    const { id } = request.params;
    const Admin = await adminModel.findById(id);
    // console.log(Admin);
    if (!Admin) {
      response.status(404).json({ message: "user not found" });
    }
    response.status(201).json({
      success: true,
      message: `this id ${id} Admin is`,
      Admin,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: error.message,
      err: error,
    });
  }
};
const delAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const Admin = await adminModel.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: `this id ${id} has been deleted successfully`,
      Admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "some error coming",
      err: error,
    });
  }
};
const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (req.body.password) {
      // Hash the new password
      body.password = await bcrypt.hash(req.body.password, 10);
    }
    const updatePerson = await adminModel.findByIdAndUpdate(id, body, {
      new: true,
    });

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
const changepassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { oldpassword, newpassword, confirmpassword } = req.body;
    if (!oldpassword || !newpassword || !confirmpassword) {
      return res.status(400).json({ message: "all feild required" });
    }
    if (newpassword !== confirmpassword) {
      return res.status(404).json({ message: "password not matched" });
    }
    const userexist = await userModel.findById(id);
    if (!userexist) {
      return res.status(404).json({ message: "not found" });
    }
    const compairepassword = await bcrypt.compare(
      oldpassword,
      userexist.password
    );
    if (!compairepassword) {
      return res.status(404).json({ message: "incorrect password" });
    }
    const hashpassword = await bcrypt.hash(newpassword, 10);
    await userModel.findByIdAndUpdate(id, { $set: { password: hashpassword } });
    return res.status(201).json({
      success: true,
      message: "passworf uPDataed",
      userexist,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
      err: error,
    });
  }
};
module.exports = {
  createAdmin,
  loginAdmin,
  getAdmin,
  delAdmin,
  updateAdmin,
  changepassword,
};
