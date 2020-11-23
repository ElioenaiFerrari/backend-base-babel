import * as R from 'ramda';

const Injector = {
  injectDepsInApp(dep) {
    const insertInApp = (App) => (fn) => fn.default(App);

    return (App) => R.pipe(R.values, R.map(insertInApp(App))(dep));
  },

  injectModelsInConnection(Models) {
    const initModel = R.curry(function (conn, Model) {
      Model.default.init(conn);

      return Model;
    });

    const associateModel = R.curry(function (conn, Model) {
      if (Model.default.associate) {
        Model.default.associate(conn.models);
      }
    });

    return function (conn) {
      return R.pipe(
        R.map(initModel(conn)),
        R.map(associateModel(conn))
      )(Models);
    };
  },
};

export default Injector;
