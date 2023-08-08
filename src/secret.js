require("dotenv").config();

const serverPort = process.env.SERVER_PORT || 3002;
const mongodbUri = process.env.MONGODB_URI;

module.exports = { serverPort, mongodbUri };
