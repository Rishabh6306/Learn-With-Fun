import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

(async () => {
  try {
    // Connect to your MongoDB Atlas cluster
    await mongoose.connect(process.env.MONGODB_URI_QUIZ, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Now that we're connected to MongoDB, start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
})();

// Define a schema for the quiz data (assuming you have a Quiz model)
const Quiz = mongoose.model('Quiz', {
  question: String,
  options: [
    { name: String, value: String }
  ],
  correctAnswer: String
});


// Define a route to fetch all quiz questions
app.get('/api/quiz', async (req, res) => {
  try {
    // Fetch all quiz questions from the database
    const quizData = await Quiz.find({});
    console.log('Quiz Data:', quizData); // Log the fetched data
    
    // Send the fetched data as a JSON response to the client
    res.json(quizData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});