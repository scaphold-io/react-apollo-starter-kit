'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { smOffset: 2, sm: 8 },
          _react2.default.createElement(
            _reactBootstrap.Jumbotron,
            { style: styles.jumbotron },
            _react2.default.createElement(
              'h1',
              null,
              'Welcome!'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Here you\'ll find Scaphold.io\'s Boilerplate React-Apollo template :)'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'primary', bsSize: 'large', target: '_blank', href: 'https://scaphold.io' },
                'Learn more ',
                _react2.default.createElement(_reactFontawesome2.default, { name: 'check' })
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'Join our ',
              _react2.default.createElement(
                'a',
                { href: 'https://scapholdslackin.herokuapp.com/', target: '_blank' },
                'Slack community'
              ),
              '!'
            )
          )
        )
      );
    }
  }]);

  return Hero;
}(_react2.default.Component);

exports.default = Hero;


var styles = {
  jumbotron: {
    marginTop: 20,
    borderRadius: 10,
    textAlign: 'center'
  }
};