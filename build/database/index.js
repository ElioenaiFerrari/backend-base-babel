"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = _interopRequireDefault(require("../config/db"));

var _resources = _interopRequireDefault(require("../resources"));

var NODE_ENV = process.env.NODE_ENV;
var conn = new _sequelize["default"](_db["default"][NODE_ENV]);

_resources["default"].modelInjections(conn);

var _default = conn;
exports["default"] = _default;
//# sourceMappingURL=index.js.map