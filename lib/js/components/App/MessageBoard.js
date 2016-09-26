'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query GetMessageBoardQuery ($boardId: ID!) {\n    getMessageBoard(id: $boardId) {\n      id\n      name\n      messages (first: 10, orderBy: "-createdAt") {\n        edges {\n          node {\n            id\n            author {\n              id\n              username\n              city\n              country\n              createdAtSecond\n              createdAtMinute\n              createdAtHour\n              createdAtDay\n              createdAtMonth\n              createdAtYear\n            }\n            content\n            createdAt\n            createdAtSecond\n            createdAtMinute\n            createdAtHour\n            createdAtDay\n            createdAtMonth\n            createdAtYear\n          }\n        }\n      }\n    }\n  }\n'], ['\n  query GetMessageBoardQuery ($boardId: ID!) {\n    getMessageBoard(id: $boardId) {\n      id\n      name\n      messages (first: 10, orderBy: "-createdAt") {\n        edges {\n          node {\n            id\n            author {\n              id\n              username\n              city\n              country\n              createdAtSecond\n              createdAtMinute\n              createdAtHour\n              createdAtDay\n              createdAtMonth\n              createdAtYear\n            }\n            content\n            createdAt\n            createdAtSecond\n            createdAtMinute\n            createdAtHour\n            createdAtDay\n            createdAtMonth\n            createdAtYear\n          }\n        }\n      }\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  mutation CreateMessageQuery($data: _CreateMessageInput!) {\n    createMessage(input: $data) {\n      changedMessage {\n        id\n        author {\n          id\n          username\n        }\n        content\n        createdAt\n        createdAtSecond\n        createdAtMinute\n        createdAtHour\n        createdAtDay\n        createdAtMonth\n        createdAtYear\n      }\n    }\n  }\n'], ['\n  mutation CreateMessageQuery($data: _CreateMessageInput!) {\n    createMessage(input: $data) {\n      changedMessage {\n        id\n        author {\n          id\n          username\n        }\n        content\n        createdAt\n        createdAtSecond\n        createdAtMinute\n        createdAtHour\n        createdAtDay\n        createdAtMonth\n        createdAtYear\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactBootstrap = require('react-bootstrap');

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _MessageForm = require('./MessageForm');

var _MessageForm2 = _interopRequireDefault(_MessageForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageBoard = function (_React$Component) {
  _inherits(MessageBoard, _React$Component);

  function MessageBoard(props) {
    _classCallCheck(this, MessageBoard);

    var _this = _possibleConstructorReturn(this, (MessageBoard.__proto__ || Object.getPrototypeOf(MessageBoard)).call(this, props));

    _this.state = {
      newMessage: {},
      newMessages: []
    };

    _this.handleMessageSubmit = _this.handleMessageSubmit.bind(_this);
    return _this;
  }

  _createClass(MessageBoard, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.newMessage.id) {
        var newMsgs = this.state.newMessages;
        newMsgs.push(props.newMessage);
        this.setState({ newMessages: newMsgs });
      }
    }
  }, {
    key: 'handleMessageSubmit',
    value: function handleMessageSubmit(message) {
      this.props.createMessage(message.content);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var conversationHeader = "Loading message title...";
      var messages = "Loading message history...";
      var newMessages = null;
      if (this.props.data.getMessageBoard && this.props.data.getMessageBoard.name) {
        conversationHeader = _react2.default.createElement(
          'h3',
          null,
          ' Talk about the ',
          this.props.data.getMessageBoard.name,
          ' '
        );
        messages = this.props.data.getMessageBoard.messages.edges.map(function (message, i) {
          return _react2.default.createElement(_Message2.default, {
            key: i,
            message: message.node
          });
        });
        newMessages = this.state.newMessages.map(function (newMsg, i) {
          return _react2.default.createElement(_Message2.default, {
            key: i,
            message: newMsg,
            userId: _this2.props.userId
          });
        }).reverse();
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'messages' },
          conversationHeader,
          _react2.default.createElement(_MessageForm2.default, {
            onMessageSubmit: this.handleMessageSubmit
          }),
          newMessages ? newMessages : "",
          messages
        )
      );
    }
  }]);

  return MessageBoard;
}(_react2.default.Component);

MessageBoard.propTypes = {
  data: _react2.default.PropTypes.object.isRequired,
  createMessage: _react2.default.PropTypes.func.isRequired,
  messageBoardId: _react2.default.PropTypes.string,
  userId: _react2.default.PropTypes.string
};

var GET_MESSAGEBOARD = (0, _graphqlTag2.default)(_templateObject);

var CREATE_MESSAGE = (0, _graphqlTag2.default)(_templateObject2);

var componentWithMessageBoard = (0, _reactApollo.graphql)(GET_MESSAGEBOARD, {
  options: function options(ownProps) {
    return {
      variables: {
        boardId: ownProps.messageBoardId
      }
    };
  }
});

var componentWithCreateMessage = (0, _reactApollo.graphql)(CREATE_MESSAGE, {
  props: function props(_ref) {
    var ownProps = _ref.ownProps;
    var mutate = _ref.mutate;
    return {
      createMessage: function createMessage(content) {
        var d = new Date();
        return mutate({
          variables: {
            data: {
              authorId: ownProps.userId,
              messageBoardId: ownProps.messageBoardId,
              content: content,
              createdAtSecond: d.getUTCSeconds(),
              createdAtMinute: d.getUTCMinutes(),
              createdAtHour: d.getUTCHours(),
              createdAtDay: d.getUTCDate(),
              createdAtMonth: d.getUTCMonth() + 1,
              createdAtYear: d.getUTCFullYear()
            }
          }
        }).then(function (_ref2) {
          // console.log("SUCCESS");

          var data = _ref2.data;
        }).catch(function (error) {
          // console.log("FAILED");
        });
      }
    };
  }
});

exports.default = componentWithCreateMessage(componentWithMessageBoard(MessageBoard));


var styles = {};