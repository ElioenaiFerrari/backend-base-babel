import requireDir from 'require-dir';
const Routers = requireDir('../router');

const Router = (App) => Object.values(Routers).forEach((fn) => fn.default(App));

export default Router;
