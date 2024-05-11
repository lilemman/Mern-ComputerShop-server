const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
