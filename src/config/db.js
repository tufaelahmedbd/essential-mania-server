const mongoose = require("mongoose");
const { mongodbUri } = require("../secret");

const connetDB = async () => {
  try {
    await mongoose.connect(mongodbUri);
  } catch (error) {
    console.error(`couldn't connect`);
  }
};
