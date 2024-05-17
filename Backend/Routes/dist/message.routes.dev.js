"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _messageController = require("../controllers/message.controller.js");

var _prRoute = _interopRequireDefault(require("../prRoute.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // import protectRoute from '../middlewares/protectRoute.js'


router.post('/send/:id', _prRoute["default"], _messageController.sendMessage);
var _default = router;
exports["default"] = _default;