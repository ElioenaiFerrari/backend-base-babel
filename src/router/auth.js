import express from 'express';
import AuthController from '@/controllers/auth';

const Router = express.Router();

Router.post('/signup', AuthController.signup);
Router.post('/signin', AuthController.signin);

/** @param { import('express').Express } App */
export default (App) => App.use('/auth', Router);
