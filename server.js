require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5080;
const connectDB = require("./database/db");
const vehicleRouter = require("./routes/route");
app.use(express.json());
connectDB();

app.use("/api/v1", vehicleRouter);

app.get("/", (res, req) => {
  console.log("Helo world");
});

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
