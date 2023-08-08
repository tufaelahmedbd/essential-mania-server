const createError = require("http-errors");
const users = require("../models/userModel");

const getAllUsers = (req, res, next) => {
  try {
    res.status(200).json({
      message: "Welcome back all users",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers };
