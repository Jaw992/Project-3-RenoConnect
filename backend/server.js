require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("hoot:server");
const mongoose = require("mongoose");
// import routers
const customersRouter = require("./controllers/CustomersController");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  debug(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const app = express();
const port = process.env.PORT || 3000;

//* Middleware
app.use(express.json());
app.use(morgan("dev"));

//* Routes
app.get("/api", (req, res) => {
  res.json({ msg: "hoot" });
});

app.use("/api/customers", customersRouter);
// app.use("/api/contractors", contractorsRouter);
// app.use("/api/phases", phasesRouter);
// app.use("/api/changeLog", changeLogRouter);
// app.use("/api/projects", projectRouter);

app.listen(port, () => {
  debug(`Example app listening on port ${port}`);
});
