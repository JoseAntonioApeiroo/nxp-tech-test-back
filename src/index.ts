import express from 'express';
import dotenv from 'dotenv';
import dutiesController from './duties/duties.controller';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*', // permite todos los dominios
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/duty', dutiesController);

const port = parseInt(process.env.APP_PORT as string);

app.listen(port, () => console.log(`Server running on port ${port}`));