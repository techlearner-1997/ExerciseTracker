const User = require("../models/user.model");
const HttpError = require("../models/HttpError");
const { validationResult } = require("express-validator");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return next(
      new HttpError("Something went wrong, Could not find users", 500)
    );
  }

  if (!users || users.length === 0) {
    return next(new HttpError("Could not find users", 400));
  }

  return res.status(200).json({ users: users });
};

const createUser = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return next(new HttpError("Please enter valid input", 422));
  }

  const username = req.body.username;

  const newUser = new User({ username });

  try {
    await newUser.save();
  } catch (err) {
    return next(
      new HttpError("Something went wrong, Could not create user", 500)
    );
  }

  return res.status(200).json("User created successfully!");
};

exports.getUsers = getUsers;
exports.createUser = createUser;
