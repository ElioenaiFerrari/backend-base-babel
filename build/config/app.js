"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("../database");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _resources = _interopRequireDefault(require("../resources"));

var App = (0, _express["default"])();
App.use((0, _cors["default"])({
  origin: true
}));
App.use(_express["default"].json());
App.use(_express["default"].urlencoded({
  extended: false
}));
App.use((0, _morgan["default"])('dev'));

_resources["default"].routerInjections(App);

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=app.js.map