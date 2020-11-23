import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

export default function (App) {
  App.use(cors({ origin: true }));
  App.use(express.json());
  App.use(express.urlencoded({ extended: false }));
  App.use(morgan('dev'));

  return App;
}
