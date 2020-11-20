import { Router } from 'express';
import requireDir from 'require-dir';
const Routers = requireDir('../router');

export default (App) => Object.values(Routers).forEach((fn) => fn.default(App));
