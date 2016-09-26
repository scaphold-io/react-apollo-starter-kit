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

var MessageForm = function (_React$Component) {
  _inherits(MessageForm, _React$Component);

  function MessageForm(props) {
    _classCallCheck(this, MessageForm);

    var _this = _possibleConstructorReturn(this, (MessageForm.__proto__ || Object.getPrototypeOf(MessageForm)).call(this, props));

    _this.state = {
      content: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.changeHandler = _this.changeHandler.bind(_this);
    return _this;
  }

  _createClass(MessageForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var message = {
        content: this.state.content
      };
      if (message.content == '') return;
      this.props.onMessageSubmit(message);
      this.setState({ content: '' });
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler(e) {
      this.setState({ content: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'message_form', style: styles.form },
        _react2.default.createElement(
          'h4',
          null,
          'Say something great!'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement('input', {
            style: styles.input,
            onChange: this.changeHandler,
            value: this.state.content
          })
        )
      );
    }
  }]);

  return MessageForm;
}(_react2.default.Component);

exports.default = MessageForm;


var styles = {
  input: {
    fontSize: '20px',
    width: '100%',
    resize: 'both',
    overflow: 'auto'
  },
  form: {
    margin: '30px 30px'
  }
};