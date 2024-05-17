"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userModel = _interopRequireDefault(require("./models/user.model.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var prRoute = function prRoute(req, res, next) {
  var token, decoded, iuser;
  return regeneratorRuntime.async(function prRoute$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = req.cookies.jwt;

          if (token) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            'error': "unauthorized access"
          }));

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(_jsonwebtoken["default"].verify(token, process.env.JWT_SECRET_KEY));

        case 6:
          decoded = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(_userModel["default"].findById(decoded.userId).select("-password"));

        case 9:
          iuser = _context.sent;
          req.user = iuser;

          if (iuser) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            "error": "user not found"
          }));

        case 13:
          next();
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.log("error from protectroute middleware", _context.t0);
          res.status(500).json({
            "error": "internal server error"
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
};

var _default = prRoute;
exports["default"] = _default;