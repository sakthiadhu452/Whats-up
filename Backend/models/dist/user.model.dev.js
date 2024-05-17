"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose["default"].Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  gender: {
    type: String,
    required: true,
    "enum": ["male", "female", "other"]
  },
  profilepic: {
    type: String,
    "default": ""
  }
}, {
  timestamps: true
});

var User = _mongoose["default"].models.User || _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;