const express = require("express");

const { check } = require("express-validator");

const router = express.Router();
const exercisesController = require("../controllers/exercise-controller");

router.route("/").get(exercisesController.getExercises);
router.route("/add").post(exercisesController.createExercise);
router.route("/:id").get(exercisesController.getExerciseById);
router.route("/update/:id").patch(exercisesController.updateExercise);
router.route("/:id").delete(exercisesController.deleteExercise);

module.exports = router;
