import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.mjs';

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION, server is shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB is connected...'))
  .catch((err) => {
    console.log('Error connecting to the database:', err);
    process.exit(1);
  });

const port = process.env.PORT;

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}...`);
});
server.timeout = 120000; // 120 seconds

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION, server is shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
