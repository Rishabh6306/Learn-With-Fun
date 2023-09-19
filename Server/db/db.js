import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

async function connectToDatabase() {
    try {
        mongoose.set('strictQuery', true);
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected");
        return db;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}

export default connectToDatabase;