import Dev from '@/models/dev';
import Bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';

/** @param {import('express').Request} req @param {import('express').Response} res*/
async function signup(req, res) {
  try {
    const dev = await Dev.create(req.body);

    return res.status(201).json(dev);
  } catch (error) {
    return res.status(400).json(error);
  }
}

/** @param {import('express').Request} req @param {import('express').Response} res*/
async function signin(req, res) {
  try {
    const { email, password } = req.body;

    const dev = await Dev.findOne({ where: { email } });

    if (!dev) throw new Error('dev not found');

    const isValidPassword = Bcrypt.compareSync(password, dev.password);

    if (!isValidPassword) throw new Error('invalid credentials');

    const token = Jwt.sign({ dev }, process.env.APP_SECRET);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export default { signup, signin };
