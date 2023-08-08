require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3002;
const mongodbUri = process.env.MONGODB_URI;
const defaultImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/default.jpg";

module.exports = { serverPort, mongodbUri, defaultImagePath };
