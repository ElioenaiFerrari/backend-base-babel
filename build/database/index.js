"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = _interopRequireDefault(require("../config/db"));

var NODE_ENV = process.env.NODE_ENV;
var connection = new _sequelize["default"](_db["default"][NODE_ENV]);
var _default = connection;
exports["default"] = _default;
//# sourceMappingURL=index.js.map