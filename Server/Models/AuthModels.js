// Import the mongoose library for working with MongoDB
import mongoose from 'mongoose';

// Define the schema for the authentication user
export const AuthUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide unique Username"], // Username field with validation message
        unique: [true, "Username Exist"] // Ensure uniqueness of username with validation message
    },
    password: {
        type: String,
        required: [true, "Please provide a password"], // Password field with validation message
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"], // Email field with validation message
        unique: true, // Ensure uniqueness of email
    },
    firstName: { type: String }, // First name field
    lastName: { type: String }, // Last name field
    profile: { type: String } // Profile field
});

// Create a model named 'AuthUser' using the AuthUserSchema
const AuthSchema = mongoose.model('AuthUser', AuthUserSchema);

// Export the AuthSchema model for use in other parts of the application
export default AuthSchema;