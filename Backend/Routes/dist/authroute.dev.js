"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authController = require("../controllers/auth.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/login', _authController.loginUser);
router.post('/logout', _authController.logout);
router.post('/signup', _authController.signup);
var _default = router;
exports["default"] = _default;