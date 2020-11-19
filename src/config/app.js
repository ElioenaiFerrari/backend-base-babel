import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const App = express();

App.use(cors({ origin: true }));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(morgan('dev'));

export default App;
