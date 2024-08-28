import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

import authRoutes from './routes/auths.js';
import taskRoutes from './routes/tasks.js';
import linkRoutes from './routes/links.js';

// Middleware to parse JSON bodies
app.use(express.json());

const corsOptions = {
    origin: ['https://homewise-725d0.web.app', 'http://localhost:5173'], // Removed trailing slashes
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};


app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api/auths', authRoutes); 
app.use('/api/tasks', taskRoutes);
app.use('/api/links', linkRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
