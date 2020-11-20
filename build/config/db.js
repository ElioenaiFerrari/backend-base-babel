"use strict";

require('dotenv/config');

var _process$env = process.env,
    DB_NAME = _process$env.DB_NAME,
    DB_USER = _process$env.DB_USER,
    DB_PASS = _process$env.DB_PASS,
    DB_DIALECT = _process$env.DB_DIALECT,
    DB_HOST = _process$env.DB_HOST;
module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
};
//# sourceMappingURL=db.js.map