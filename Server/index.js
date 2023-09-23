// Import required libraries and modules
import express from 'express'; // Import Express.js for creating the server
import cors from 'cors'; // Import CORS for handling Cross-Origin Resource Sharing
import morgan from 'morgan'; // Import Morgan for HTTP request logging
import dotenv from 'dotenv'; // Import dotenv for handling environment variables
import connectToDatabase from './db/db.js'; // Import the function to connect to the database
import authRouter from './routes/AuthRoutes.js'; // Import authentication routes
import notesRoutes from './routes/NotesRoutes.js'; // Import notes routes
import formSubmitController from './controller/formSubitController.js'; // Import the form submission controller

// Load environment variables from a .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Set the port for the server, defaulting to 10000 if not provided
const port = process.env.PORT || 10000;

// Configure middleware for the Express app
app.use(cors({
  origin: ['https://learn-with-fun-new.netlify.app', 'http://localhost:5173'], // Add your frontend URL and localhost URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true, // If you need to support cookies or authentication headers
}));


app.use(express.json({ limit: '10mb' }));
app.use(morgan('tiny')); // Use Morgan for request logging
app.disable('x-powered-by'); // Disable 'x-powered-by' header

// Use authentication routes under the '/api' path
app.use('/api', authRouter);

// Connect to the main database
connectToDatabase()
  .then(() => {
    console.log('Database Connected');

    // Use user-related routes under their respective paths
    app.use('/', notesRoutes); // Handle routes for user-related notes
    app.delete('/:id', notesRoutes); // Handle delete requests for user-related notes
    app.put('/:id', notesRoutes); // Handle update requests for user-related notes

    // Define routes for form submission with the specified controller
    app.post('/api/contact', formSubmitController);

    app.use((err, req, res, next) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });

    // Start the Express server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running at http://0.0.0.0:${port}`);
    });
  })
  .catch((error) => {
    console.log('Invalid database connection:', error);
  });
