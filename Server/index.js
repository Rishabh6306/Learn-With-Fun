import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectToDatabase from './db/db.js'; // Use the same database connection function for both
import authRouter from './routes/AuthRoutes.js';
import notesRoutes from './routes/NotesRoutes.js';
import formSubmitController from './controller/formSubitController.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

app.use('/api', authRouter);

// Connect to the main database
connectToDatabase()
  .then(() => {
    console.log('Database Connected');

    // Use user-related routes under their respective paths
    app.use('/', notesRoutes);
    app.delete('/:id', notesRoutes);
    app.put('/:id', notesRoutes);
    // Form submit routes with controller
    app.post('/api/contact', formSubmitController);

    // Start the Express server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log('Invalid database connection:', error);
  });