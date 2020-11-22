import '@/database';
import express from 'express';
import Resources from '@/resources';

const App = express();

Resources.routerInjections(App);
Resources.middlewaresInjections(App);

export default App;
