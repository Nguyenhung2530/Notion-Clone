const mongoose = require("mongoose");
const URL = process.env.DB_URL;
const ConnectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connect Database Success....");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = ConnectDb;
