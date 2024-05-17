"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongodb = require("mongodb");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var conversationSchema = _mongoose["default"].Schema({
  participants: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Message",
    "default": []
  }]
}, {
  timestamps: true
});

var Conversation = _mongoose["default"].model("Conversation", conversationSchema);

var _default = Conversation;
exports["default"] = _default;