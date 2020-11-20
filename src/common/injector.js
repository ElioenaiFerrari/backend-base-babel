import connection from '@/database';
import * as R from 'ramda';
import model from './model';

const Injector = {
  injectDepsInApp(common) {
    const execFunc = (App) => (fn) => fn.default(App);

    return (App) => R.pipe(R.values, R.map(execFunc(App))(common));
  },

  injectModelsInConnection(Models) {
    function execFunc(conn) {
      return function (Model) {
        Model.default.init(conn);

        if (Model.default.associate) {
          Model.default.associate(conn.models);
        }

        return Model;
      };
    }

    return (conn) => R.pipe(R.map(execFunc(conn)))(Models);
  },
};

export default Injector;
