const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
const exercisesRouter = require("./routes/ExerciseRoutes");
const usersRouter = require("./routes/UserRoutes");

const app = express();

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

app.use(cors());

app.use(bodyParser.json());

//add routes here
app.use("/api/exercises", exercisesRouter);
app.use("/api/users", usersRouter);

app.use((req, res, next) => {
  throw new HttpError("Could not find the route", 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB database connection established successfully");
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
