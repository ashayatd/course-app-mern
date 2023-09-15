const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

DB = process.env.DB_NAME;
USERNAME = process.env.DB_USERNAME;
PASSWORD = process.env.DB_PASSWORD;
CLUSTERURL = process.env.CLUSTERURL;

function connection() {
<<<<<<< HEAD
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@${CLUSTERURL}/courses_app`;
=======
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTERURL}/${DB}`;
>>>>>>> 73f0cbbc11443c1356460d4391c6ff7708bab9a8
  mongoose.connect(MONGODB_URI);

  mongoose.connection.on("connected", () => {
    console.log("MongoDb Connected");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected");
  });
  mongoose.connection.on("error", (err) => {
    console.log("error on mongoDB:", err.message);
  });
}

module.exports = connection;
