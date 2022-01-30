const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

// settings
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/v1", routes);

module.exports = app;
