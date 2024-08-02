const express = require("express");
const {
<<<<<<< HEAD
  createVehicle,
  updateVehicle,
  getAllVehicle,
  getSingleVehicle,
  deleteVehicle,
} = require("../controller/vehicleController");

const vehicleRouter = express.Router();

vehicleRouter.post("/createVehicle", createVehicle);
vehicleRouter.patch("/updateVehicle/:id", updateVehicle);
vehicleRouter.get("/singleVehicle/:id", getSingleVehicle);
vehicleRouter.delete("/deleteVehicle/:id", deleteVehicle);
vehicleRouter.get("/allVehicle", getAllVehicle);

module.exports = vehicleRouter;
=======
  createAdmin,
  loginAdmin,
  getAdmin,
  delAdmin,
  updateAdmin,
} = require("../controller/admincontroller");
const router = express.Router();
router.post("/createadmin", createAdmin);
router.post("/loginadmin", loginAdmin);
router.get("/getadmin/:id", getAdmin);
router.delete("/deleteadmin/:id", delAdmin);
router.patch("/updateadmin/:id", updateAdmin);
module.exports = router;
>>>>>>> cbc08ec34a1e0dc7582665ed928cff46e9e9e458
