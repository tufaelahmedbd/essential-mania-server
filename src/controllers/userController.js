const createError = require("http-errors");

const getAllUsers = (req, res, next) => {
  try {
    res.status(200).json({
      message: "Welcome back all users",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers };
