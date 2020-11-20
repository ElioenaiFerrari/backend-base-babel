import '@/database';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Router from '@/common/router';

const App = express();

App.use(cors({ origin: true }));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(morgan('dev'));

Router(App);

export default App;
