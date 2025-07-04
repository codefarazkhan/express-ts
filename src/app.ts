import express from 'express';
import userRoutes from './routes/user.routes';
import errorHandler from './middlewares/error.middleware';

export const app = express();

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error middleware
app.use(errorHandler);
