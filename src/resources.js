import requireDir from 'require-dir';
import Injector from '@/injector';
const Models = requireDir('models');
const Routers = requireDir('router');
const Middlewares = requireDir('middlewares');

const modelInjections = Injector.injectModelsInConnection(Models);
const routerInjections = Injector.injectDepsInApp(Routers);
const middlewaresInjections = Injector.injectDepsInApp(Middlewares);

const Resources = { modelInjections, routerInjections, middlewaresInjections };

export default Resources;
