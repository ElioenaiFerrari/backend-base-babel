import * as R from 'ramda';

const Injector = {
  injectDepsInApp(common) {
    const insertInApp = (App) => (fn) => fn.default(App);

    return (App) => R.pipe(R.values, R.map(insertInApp(App))(common));
  },

  injectModelsInConnection(Models) {
    function modelConn(conn) {
      return function (Model) {
        Model.default.init(conn);

        if (Model.default.associate) {
          Model.default.associate(conn.models);
        }

        return Model;
      };
    }

    return (conn) => R.pipe(R.map(modelConn(conn)))(Models);
  },
};

export default Injector;
