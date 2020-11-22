import '@/database';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Resources from '@/resources';

const App = express();

App.use(cors({ origin: true }));
App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use(morgan('dev'));

Resources.routerInjections(App);
Resources.middlewaresInjections(App);

export default App;
