import Dev from '@/models/dev';

/** @param {import('express').Request} req @param {import('express').Response} res*/
async function store(req, res) {
  try {
    const dev = await Dev.create(req.body);

    return res.status(201).json(dev);
  } catch (error) {
    return res.status(400).json(error);
  }
}

/** @param {import('express').Request} req @param {import('express').Response} res*/
async function index(req, res) {
  try {
    const devs = await Dev.findAll({ where: req.query });

    return res.status(200).json(devs);
  } catch (error) {
    return res.status(400).json(error);
  }
}

/** @param {import('express').Request} req @param {import('express').Response} res*/
async function show(req, res) {
  try {
    const { id } = req.params;

    const dev = await Dev.findByPk(id);

    return res.status(200).json(dev);
  } catch (error) {
    return res.status(400).json(error);
  }
}

/** @param {import('express').Request} req @param {import('express').Response} res*/
async function update(req, res) {
  try {
    const { id } = req.params;

    const dev = await Dev.findByPk(id);

    await dev.update(req.body);

    return res.status(200).json(dev);
  } catch (error) {
    return res.status(400).json(error);
  }
}

/** @param {import('express').Request} req @param {import('express').Response} res*/
async function destroy(req, res) {
  try {
    const { id } = req.params;

    const dev = await Dev.findByPk(id);

    await dev.destroy();

    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export default { store, index, show, update, destroy };
