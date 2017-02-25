'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('./Register');

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      showModal: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'goToGraphiQL',
    value: function goToGraphiQL() {
      _reactRouter.browserHistory.push('/graphiql');
    }
  }, {
    key: 'goHome',
    value: function goHome() {
      _reactRouter.browserHistory.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Navbar,
        { style: styles.navbar },
        _react2.default.createElement(
          _reactBootstrap.Navbar.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Navbar.Brand,
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/' },
              'Scaphold'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Nav,
          { pullRight: true },
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { onClick: this.goHome },
            'Home'
          ),
          _react2.default.createElement(
            _reactBootstrap.NavItem,
            { onClick: this.goToGraphiQL },
            'GraphiQL'
          ),
          _react2.default.createElement(_Login2.default, null),
          _react2.default.createElement(_Register2.default, null)
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;


var styles = {
  navbar: {
    marginBottom: 0
  }
};