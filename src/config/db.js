const mongoose = require("mongoose");
const { mongodbUri } = require("../secret");

const connectDatabase = async (options = {}) => {
  try {
    await mongoose.connect(mongodbUri, options);
    console.log("Connection to DB is successful");

    mongoose.connection.on("error", (error) => {
      console.error("DB connection error");
    });
  } catch (error) {
    console.error("Could not connected", error.toString());
  }
};

module.exports = connectDatabase;
