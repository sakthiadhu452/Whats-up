"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _authroute = _interopRequireDefault(require("../Backend/Routes/authroute.js"));

var _connectToMongoDb = _interopRequireDefault(require("./DB/connectToMongoDb.js"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _messageRoutes = _interopRequireDefault(require("./Routes/message.routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config({
  path: "../.env"
});

var port = process.env.PORT || 4000;
app.use(_express["default"].json());
app.use((0, _cookieParser["default"])());
app.use('/api/auth', _authroute["default"]);
app.use('/api/messages', _messageRoutes["default"]);
app.listen(port, function () {
  (0, _connectToMongoDb["default"])();
  console.log("app is running on ".concat(port));
});