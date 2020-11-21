import '@/database';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import injections from '@/injections';

const App = express();

App.use(cors({ origin: true }));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(morgan('dev'));

injections.routerInjections(App);

export default App;
