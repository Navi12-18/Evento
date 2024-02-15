const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://naivaidyayadavin:navi2002@cluster0.kuvoyit.mongodb.net';

const connectDB = async() => {
    console.log(MONGO_URL);
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;