import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './src/data-access/connection.js';
import { getLogController, getUsersController, postExerciseController, postUserController } from './src/controllers/index.js';
import makeExpressCallback from './src/express-callback/express-callback.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html')
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route('/api/users')
  .get(makeExpressCallback(getUsersController))
  .post(makeExpressCallback(postUserController))

app.route('/api/users/:_id/exercises')
  .post(makeExpressCallback(postExerciseController))

app.route('/api/users/:_id/logs')
  .get(makeExpressCallback(getLogController))

connectDB(app);
