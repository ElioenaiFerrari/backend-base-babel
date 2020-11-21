import requireDir from 'require-dir';
import Injector from '@/injector';
const Models = requireDir('models');
const Routers = requireDir('router');

const modelInjections = Injector.injectModelsInConnection(Models);
const routerInjections = Injector.injectDepsInApp(Routers);

const Resources = { modelInjections, routerInjections };

export default Resources;
