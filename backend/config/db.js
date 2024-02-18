const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB host:", connection.connection.host);
  } catch (error) {
    console.log(`Error Connected: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
