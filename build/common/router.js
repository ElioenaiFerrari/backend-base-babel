"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _requireDir = _interopRequireDefault(require("require-dir"));

var Routers = (0, _requireDir["default"])('../router');

var _default = function _default(App) {
  return Object.values(Routers).forEach(function (fn) {
    return fn["default"](App);
  });
};

exports["default"] = _default;
//# sourceMappingURL=router.js.map