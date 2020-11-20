"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./config/app"));

var _process$env = process.env,
    APP_NAME = _process$env.APP_NAME,
    PORT = _process$env.PORT;

var feedback = function feedback() {
  return console.log("[".concat(PORT, "]").concat(APP_NAME));
};

_app["default"].listen(PORT, feedback);
//# sourceMappingURL=main.js.map