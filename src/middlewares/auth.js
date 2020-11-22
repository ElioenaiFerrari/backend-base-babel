import * as R from 'ramda';
import Bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

/** @param { import('express').Request } req  @param { import('express').Response } res */
function authMiddleware(req, res, next) {
  try {
    const { APP_SECRET } = process.env;
    const { authorization } = req.headers;

    if (!authorization) throw new Error('unauthorized');

    const decodeToken = R.curry(function (secret, token) {
      return Jwt.verify(token, secret);
    });

    function setCurrentDev(dev) {
      req.auth.dev = dev;

      return req;
    }

    const pass = () => next();

    return R.pipe(
      R.split(' '),
      R.takeLast(1),
      decodeToken(APP_SECRET),
      setCurrentDev,
      pass
    )(authorization);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

/** @param { import('express').Express } App */
export default (App) => App.use('/app', authMiddleware);
