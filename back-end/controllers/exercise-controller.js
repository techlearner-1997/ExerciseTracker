const Exercise = require("../models/exercise");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");

const getExercises = async (req, res, next) => {
  await Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getExerciseById = async (req, res, next) => {
  await Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
};

const createExercise = async (req, res, next) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  await newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const updateExercise = async (req, res, next) => {
  await Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      await exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

const deleteExercise = async (req, res, next) => {
  await Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getExercises = getExercises;
exports.getExerciseById = getExerciseById;
exports.createExercise = createExercise;
exports.updateExercise = updateExercise;
exports.deleteExercise = deleteExercise;
