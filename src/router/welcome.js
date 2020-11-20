import express from 'express';

const Router = express.Router();

Router.get('/', (_, res) => res.status(200).send('hello world'));

/** @param { import('express').Express } App */
export default (App) => App.use('/welcome', Router);
