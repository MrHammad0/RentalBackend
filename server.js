require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5080;
const connectDB = require("./database/db");
const adminRoute = require("./routes/admin");

connectDB();
app.use(express.json());
app.use("/api/v1", adminRoute);

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
