require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5080;
const connectDB = require("./database/db");
const vehicleRouter = require("./routes/VehicleRoute");
const accidentRoute = require("./routes/AccidentRoute");
const comaplainRoute = require("./routes/complainRoute");
const fineRoute = require("./routes/fineRoute");
const incomeRoute = require("./routes/incomeRoute");
const profitRoute = require("./routes/profitRoute");
const expenseRoute = require("./routes/expenseRouter");
const financeRoute = require("./routes/financeRoute");
const maintenanceRoute = require("./routes/maintenanceRoute");
const maintenanceActivityRoute = require("./routes/maintenanceActiviyRoute");
const operationRoute = require("./routes/operationalRoute");
const rentalRoute = require("./routes/rentalRoute");

app.use(express.json());
connectDB();

app.use("/api/v1", vehicleRouter);
app.use("/api/v1", accidentRoute);
app.use("/api/v1", comaplainRoute);
app.use("/api/v1", fineRoute);
app.use("/api/v1", incomeRoute);
app.use("/api/v1", profitRoute);
app.use("/api/v1", financeRoute);
app.use("/api/v1", expenseRoute);
app.use("/api/v1", maintenanceRoute);
app.use("/api/v1", maintenanceActivityRoute);
app.use("/api/v1", operationRoute);
app.use("/api/v1", rentalRoute);

app.get("/", (res, req) => {
  console.log("Helo world");
});

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
