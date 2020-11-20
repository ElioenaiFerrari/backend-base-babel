"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;require("../database");
var _consign = _interopRequireDefault(require("consign"));
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));

var App = (0, _express["default"])();

App.use((0, _cors["default"])({ origin: true }));
App.use(_express["default"].json());
App.use(_express["default"].urlencoded({ extended: false }));
App.use((0, _morgan["default"])('dev'));

(0, _consign["default"])({
  locale: 'pt-br' }).

include('src/router').
into(App);var _default =

App;exports["default"] = _default;