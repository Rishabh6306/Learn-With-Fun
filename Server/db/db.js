import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

async function connectToDatabase() {
    try {
        mongoose.set('strictQuery', true);

        const mongoURI = process.env.MONGODB_URI; // Get URI from environment variables
        if (!mongoURI) {
            throw new Error("MONGODB_URI is not defined. Please check your environment variables.");
        }

        const db = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,     // Use the new URL parser
            useUnifiedTopology: true,   // Use the new Server Discover and Monitoring engine
        });

        console.log("Database Connected");
        return db;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Rethrow error for further handling if needed
    }
}

export default connectToDatabase;