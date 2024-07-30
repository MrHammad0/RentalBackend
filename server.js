require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5080;
const connectDB = require('./database/db');

connectDB()


app.get('/', (res, req) => {
    console.log("Helo world")
})


app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});
