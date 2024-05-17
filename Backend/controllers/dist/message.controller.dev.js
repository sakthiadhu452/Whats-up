"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = void 0;

var _conversationModel = _interopRequireDefault(require("../models/conversation.model.js"));

var _messageModel = _interopRequireDefault(require("../models/message.model.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var sendMessage = function sendMessage(req, res) {
  var message, recevierId, senderId, conversation, newMessage;
  return regeneratorRuntime.async(function sendMessage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          message = req.body.message;
          recevierId = req.params.id;
          senderId = req.user._id;
          _context.next = 6;
          return regeneratorRuntime.awrap(_conversationModel["default"].findOne({
            participants: {
              $all: [senderId, recevierId]
            }
          }));

        case 6:
          conversation = _context.sent;

          if (conversation) {
            _context.next = 12;
            break;
          }

          _readOnlyError("conversation");

          _context.next = 11;
          return regeneratorRuntime.awrap(_conversationModel["default"].create({
            participants: [senderId, recevierId]
          }));

        case 11:
          conversation = _context.sent;

        case 12:
          newMessage = new _messageModel["default"]({
            senderId: senderId,
            receiverId: recevierId,
            message: message
          });
          newMessage.save();

          if (newMessage) {
            conversation.messages.push(newMessage._id);
            conversation.save();
          }

          res.status(200).send({
            "message": newMessage
          });
          _context.next = 22;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          console.log("error from sending message", _context.t0);
          res.status(500).json({
            "message": "internal server errror"
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

exports.sendMessage = sendMessage;