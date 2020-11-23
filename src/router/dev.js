import express from 'express';
import DevController from '@/controllers/dev';

const Router = express.Router();

Router.get('/', DevController.index);
Router.get('/:id', DevController.show);
Router.put('/:id', DevController.update);
Router.delete('/:id', DevController.destroy);

/** @param { import('express').Express } App */
export default (App) => App.use('/app/devs', Router);
