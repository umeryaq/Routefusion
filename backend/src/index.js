import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import { config } from 'dotenv';
import { createServer } from 'http';

import DB from './config/db';
import Router from './router/index';

config();

const app = express();

const PORT = 8080;
const server = createServer(app);

app.use(morgan('dev'));
app.use(cors());
app.use(compression());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

try {
  DB();
  app.get('/', (req, res) => {
    res.status(200).json({ status: 'Api is working' });
  });

  app.use('/api/v1', Router);

  server.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
  });
} catch (err) {
  console.log(err.message);
}

export default app;
