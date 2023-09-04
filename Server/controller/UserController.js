// Import the 'UserModel' from the 'UserModels.js' file to interact with user data
import UserModel from "../Models/UserModels.js";

// Controller function to get all users
const getAll = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await UserModel.find({});
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Controller function to create a new user
const createUser = async (req, res) => {
    try {
        // Create a new user with the data from the request body
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Controller function to delete a user by ID
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        // Find and remove a user by their ID
        await UserModel.findByIdAndRemove(userId);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Controller function to update a user by ID
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body; // Assuming the request body contains the updated user data

    try {
        // Update the user in the database by their ID and return the updated user
        const updated = await UserModel.findByIdAndUpdate(userId, updatedUser, { new: true });

        if (!updated) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(updated);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Export the controller functions to be used in the routes
export { getAll, createUser, deleteUser, updateUser };