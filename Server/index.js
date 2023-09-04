// Import necessary modules and libraries
import dotenv from 'dotenv';        // Load environment variables from a .env file
import express from 'express';      // Express.js for building web applications
import cors from 'cors';            // Cross-Origin Resource Sharing middleware
import connectToDatabase from './db/db.js'; // Function to connect to the database
import usersRoutes from './routes/UserRoutes.js'; // Import user-related routes

// Load environment variables from a .env file if present
dotenv.config();

// Define the port for the Express server
const port = process.env.PORT || 3000;

// Create an Express application
const app = express();

// Enable CORS (Cross-Origin Resource Sharing) for the app
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Call the function to connect to the database
connectToDatabase();

// Use user-related routes under their respective paths
app.use('/', usersRoutes); // GET, POST, and other user-related routes
app.delete('/:id', usersRoutes); // DELETE user route
app.put('/:id', usersRoutes); // PUT (update) user route

// Define other route groups and import their route files here if needed

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});