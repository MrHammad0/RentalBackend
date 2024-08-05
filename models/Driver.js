const { mongoose } = require("mongoose");

const driverSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  licensenumber: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  hiredate: {
    type: String,
    required: true,
  },
  additionalnotes: {
    type: String,
    required: true,
  },
  selectfile: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  //   products: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "products",
  //     },
  //   ],
});
const driverModel = mongoose.model("driver", driverSchema);
module.exports = driverModel;
