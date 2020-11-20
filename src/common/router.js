import requireDir from 'require-dir';
import Injector from './injector';
const Routers = requireDir('../router');

export default Injector.injectDepsInApp(Routers);
