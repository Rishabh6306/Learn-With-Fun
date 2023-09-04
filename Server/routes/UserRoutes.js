// Import the 'express' module for creating a router
import express from 'express';

// Import controller functions from 'UserController.js' for handling user-related actions
import { createUser, deleteUser, getAll, updateUser } from '../controller/UserController.js';

// Create an instance of an Express router
const router = express.Router();

// Define and document the routes handled by this router:

// GET request to fetch all users
router.get('/', getAll);

// POST request to create a new user
router.post('/createUser', createUser);

// DELETE request to delete a user by ID (assuming a path like '/api/notes/:id')
router.delete('/api/notes/:id', deleteUser);

// PUT request to update a user by ID (assuming a path like '/api/notes/:id')
router.put('/api/notes/:id', updateUser);

// Export the router to be used in other parts of the application
export default router;