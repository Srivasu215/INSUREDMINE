const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
let URL = process.env.MONGO_URL

async function connectToDatabase() {
    try {
        await mongoose.connect(URL, {
            serverSelectionTimeoutMS: 10000
        });
        console.log('MongoDB connected sucessfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
}

module.exports = { connectToDatabase };
