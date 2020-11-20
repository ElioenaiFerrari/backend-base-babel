"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _express = _interopRequireDefault(require("express"));

var Router = _express["default"].Router();

Router.get('/', function (_, res) {return res.status(200).send('hello world');});

/** @param { import('express').Express } App */var _default =
function _default(App) {return App.use('/welcome', Router);};exports["default"] = _default;