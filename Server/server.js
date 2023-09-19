import express from 'express';
import cors from 'cors';


// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors());


app.get('/', (req, res) => {
    res.status(200).json("Home GET Request");
});

