require("dotenv").config();
const express = require("express");
const adminRoutes = require("./routes/route");
const app = express();
const port = process.env.PORT || 5080;
const connectDB = require("./database/db");

connectDB();
app.use(express.json());
app.use("/api/v1", adminRoutes);

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
