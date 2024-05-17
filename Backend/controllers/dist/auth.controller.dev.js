"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.logout = exports.loginUser = void 0;

var _generatetoken = _interopRequireDefault(require("../utils/generatetoken.js"));

var _userModel = _interopRequireDefault(require("../models/user.model.js"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loginUser = function loginUser(req, res) {
  var _req$body, username, password, user, isPasswordCorrect;

  return regeneratorRuntime.async(function loginUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            username: username
          }));

        case 4:
          user = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(_bcrypt["default"].compare(password ? password : "", user.password ? user.password : ""));

        case 7:
          isPasswordCorrect = _context.sent;

          if (!(!user || !isPasswordCorrect)) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: "invalid username or password"
          }));

        case 10:
          (0, _generatetoken["default"])(user._id, res);
          res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilepic
          });
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.log("error in login controller", _context.t0);
          res.status(500).json({
            "error": "internal server error"
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

exports.loginUser = loginUser;

var logout = function logout(req, res) {
  return regeneratorRuntime.async(function logout$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            res.cookie("jwt", "", {
              maxAge: 0
            });
            res.status(200).json({
              "message": "Logged out successfully"
            });
          } catch (err) {
            console.log("error from logout", err);
            res.send(500).json({
              "error": "internal sever error"
            });
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.logout = logout;

var signup = function signup(req, res) {
  var _req$body2, fullName, username, password, confirmPassword, gender, user, salt, hashedPassword, boyProfilePic, girlProfilePic, newUser;

  return regeneratorRuntime.async(function signup$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, fullName = _req$body2.fullName, username = _req$body2.username, password = _req$body2.password, confirmPassword = _req$body2.confirmPassword, gender = _req$body2.gender;

          if (!(password !== confirmPassword)) {
            _context3.next = 4;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            "error": "Password don't match"
          }));

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            username: username
          }));

        case 6:
          user = _context3.sent;

          if (!user) {
            _context3.next = 9;
            break;
          }

          return _context3.abrupt("return", res.status(400).json({
            "error": "Username already exists"
          }));

        case 9:
          _context3.next = 11;
          return regeneratorRuntime.awrap(_bcrypt["default"].genSalt(10));

        case 11:
          salt = _context3.sent;
          _context3.next = 14;
          return regeneratorRuntime.awrap(_bcrypt["default"].hash(password, salt));

        case 14:
          hashedPassword = _context3.sent;
          boyProfilePic = "https://avatar.iran.liara.run/public/boy?username=".concat(username);
          girlProfilePic = "https://avatar.iran.liara.run/public/boy?username=".concat(username);
          newUser = new _userModel["default"]({
            fullName: fullName,
            username: username,
            password: hashedPassword,
            gender: gender,
            profilepic: gender === "male" ? boyProfilePic : girlProfilePic
          });

          if (!newUser) {
            _context3.next = 26;
            break;
          }

          _context3.next = 21;
          return regeneratorRuntime.awrap((0, _generatetoken["default"])(newUser._id, res));

        case 21:
          _context3.next = 23;
          return regeneratorRuntime.awrap(newUser.save());

        case 23:
          res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilepic
          });
          _context3.next = 27;
          break;

        case 26:
          res.status(400).json({
            error: "invalid user data"
          });

        case 27:
          _context3.next = 33;
          break;

        case 29:
          _context3.prev = 29;
          _context3.t0 = _context3["catch"](0);
          console.log("error in signup controller", _context3.t0);
          res.status(500).json({
            "error": "internal server error"
          });

        case 33:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 29]]);
};

exports.signup = signup;