require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./Models/UserModels.js');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

// Attempt to connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB:', process.env.MONGODB_URI);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.json(user);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/createUser', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const noteId = req.params.id;
  try {
    // Remove the note from the database by its ID
    await UserModel.findByIdAndRemove(noteId);
    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    console.error('Error deleting note:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});