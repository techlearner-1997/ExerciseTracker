const express = require("express");

const { check } = require("express-validator");

const router = express.Router();
const usersController = require("../controllers/user-controller");

router.route("/").get(usersController.getUsers);
router
  .route("/add")
  .post(
    [check("username").notEmpty().isLength({ min: 3 })],
    usersController.createUser
  );

module.exports = router;
