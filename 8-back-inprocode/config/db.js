const mongoose = require('mongoose');
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connexió a MongoDB establerta');
  } catch (err) {
    console.error('❌ Error de connexió a MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;



