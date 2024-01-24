import mongoose from "mongoose"

const MONGO_URL = process.env.MONGO_URL || '';

const connectDB = async() => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

export default connectDB;