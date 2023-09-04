// Import the 'mongoose' library for working with MongoDB
import mongoose from "mongoose";

// Define a schema for the 'User' collection in the database
const UserSchema = new mongoose.Schema({
  headline: String, // A field for the user's headline
  content: String,  // A field for the user's content
});

// Create a model for the 'User' collection using the defined schema
const UserModel = mongoose.model("User", UserSchema);

// Export the 'UserModel' to be used for interacting with the 'User' collection
export default UserModel;