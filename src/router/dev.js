import express from 'express';
import DevController from '@/common/controllers/dev';

const Router = express.Router();

Router.post('/', DevController.store);
Router.get('/', DevController.index);

/** @param { import('express').Express } App */
export default (App) => App.use('/devs', Router);
