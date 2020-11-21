import express from 'express';
import DevController from '@/controllers/dev';

const Router = express.Router();

Router.post('/', DevController.store);
Router.get('/', DevController.index);
Router.get('/:id', DevController.show);
Router.put('/:id', DevController.update);
Router.delete('/:id', DevController.destroy);

/** @param { import('express').Express } App */
export default (App) => App.use('/devs', Router);
