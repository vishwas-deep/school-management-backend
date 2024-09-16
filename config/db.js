const mongoose = require('mongoose');
require('dotenv').config(); // This loads environment variables from the .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { // Use MONGO_URI from .env or environment variables
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
