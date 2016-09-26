'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message(props) {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {

      var youComponent = _react2.default.createElement('span', null);
      if (this.props.message && this.props.message.author && this.props.userId == this.props.message.author.id) {
        youComponent = _react2.default.createElement(
          'span',
          null,
          '(You)'
        );
      }

      var metadataComponent = _react2.default.createElement('div', null);
      if (this.props.message.author) {
        metadataComponent = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { style: styles.message.metadata.left },
            ' Posted on ',
            this.props.message.author.createdAtMonth,
            '/',
            this.props.message.author.createdAtDay,
            ' at ',
            this.props.message.createdAtHour,
            ':',
            this.props.message.createdAtMinute,
            ':',
            this.props.message.createdAtSecond,
            ' '
          ),
          _react2.default.createElement(
            'span',
            { style: styles.message.metadata.right },
            ' from ',
            this.props.message.author.city,
            ', ',
            this.props.message.author.country,
            ' ',
            youComponent
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'message', style: styles.message },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'b',
            null,
            this.props.message.content
          )
        ),
        metadataComponent
      );
    }
  }]);

  return Message;
}(_react2.default.Component);

exports.default = Message;


var styles = {
  message: {
    margin: '10px 10px',
    metadata: {
      left: {
        fontSize: '8px',
        textAlign: 'left'
      },
      right: {
        fontSize: '8px',
        textAlign: 'right'
      }
    }
  }
};