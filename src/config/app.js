import '@/database';
import express from 'express';
import Resources from '@/resources';

const App = express();

Resources.middlewaresInjections(App);
Resources.routerInjections(App);

export default App;
