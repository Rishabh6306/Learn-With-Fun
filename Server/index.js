// Import necessary modules and libraries
import dotenv from 'dotenv';        // Load environment variables from a .env file
import express from 'express';      // Express.js for building web applications
import cors from 'cors';            // Cross-Origin Resource Sharing middleware
import connectToDatabase from './db/db.js'; // Function to connect to the database
import notesRoutes from './routes/NotesRoutes.js'; // Import user-related routes

import formSubitController from './controller/formSubitController.js' // import formSubitController


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
app.use('/', notesRoutes); // GET, POST, and other user-related routes
app.delete('/:id', notesRoutes); // DELETE user route
app.put('/:id', notesRoutes); // PUT (update) user route


// Form subit routes with controller
app.post('/api/contact', formSubitController);


// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});