import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import serviceRoutes from './routes/services.js';
import quoteRoutes from './routes/quotes.js';

dotenv.config();

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 5000;
const allowedOrigins = [process.env.CLIENT_URL || 'http://localhost:5173'];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Print, publishing, and packaging API is running',
  });
});

app.use('/api/services', serviceRoutes);
app.use('/api/quotes', quoteRoutes);

const startServer = async (port = DEFAULT_PORT) => {
  await connectDB();

  return new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
      resolve(server);
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        const nextPort = port + 1;
        console.warn(`Port ${port} is busy. Retrying on ${nextPort}...`);
        resolve(startServer(nextPort));
        return;
      }

      console.error(`Failed to start server on port ${port}:`, error.message);
      reject(error);
    });
  });
};

startServer().catch((error) => {
  console.error('Failed to start server:', error.message);
  process.exit(1);
});
