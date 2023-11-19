import express from 'express';
import cors from 'cors';
import AppError from './utils/appError.mjs';
import globalErrorHandler from './controllers/appErrorController.mjs';

const app = express();

app.use(cors());

// Use body-parser to retrieve the raw body as a buffer
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

import quizRouter from './routes/quizRoutes.mjs';
import announcementRouter from './routes/announcementRoutes.mjs';

app.use(express.json());
// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/api/v1/announcement', announcementRouter);
app.use('/api/v1/quiz', quizRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Couldn't find ${req.originalUrl} on this server!`, 400));
});

// IMPLEMENTING a global error handling middleware
app.use(globalErrorHandler);

export default app;
