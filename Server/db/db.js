// Import the 'mongoose' library for MongoDB connectivity
import mongoose from "mongoose";

// Define the MongoDB connection function with async/await
const connectToDatabase = async () => {
  try {
    // Attempt to connect to the MongoDB database using the provided URI
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,          // Use new URL parser
      useUnifiedTopology: true,      // Use the new server discovery and monitoring engine
    });
    console.log('Connected to MongoDB:', process.env.MONGODB_URI);
  } catch (error) {
    // Handle any errors that occur during the connection process
    console.error('Error connecting to MongoDB:', error);
  }
};

// Export the 'connectToDatabase' function to be used in other parts of the application
export default connectToDatabase;