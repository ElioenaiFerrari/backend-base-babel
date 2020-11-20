import requireDir from 'require-dir';
import Injector from './injector';
const Models = requireDir('models');

export default Injector.injectModelsInConnection(Models);
