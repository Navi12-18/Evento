import express, { Application } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import eventRoutes from './routes/eventRoutes';
import { connectDB } from './config/db';

const app: Application = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

export default app;