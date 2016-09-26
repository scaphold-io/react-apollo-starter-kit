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

var Description = function (_React$Component) {
  _inherits(Description, _React$Component);

  function Description() {
    _classCallCheck(this, Description);

    return _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).apply(this, arguments));
  }

  _createClass(Description, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Row,
        { style: styles.marketing },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { smOffset: 2, sm: 4 },
          _react2.default.createElement(
            'h4',
            { style: styles.marketing.h4 },
            _react2.default.createElement(
              'a',
              { target: '_blank', href: 'https://facebook.github.io/react/' },
              'React.js Boilerplate'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: styles.marketing.p },
            'This React.js boilerplate helps developers create modern, performant, and clean web apps with the help of Scaphold.io.'
          ),
          _react2.default.createElement(
            'h4',
            { style: styles.marketing.h4 },
            _react2.default.createElement(
              'a',
              { target: '_blank', href: 'http://dev.apollodata.com/react/' },
              'React-Apollo'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: styles.marketing.p },
            'Leverage the simplicity and power of Apollo Client and GraphQL to manage your application\'s data store.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { sm: 4 },
          _react2.default.createElement(
            'h4',
            { style: styles.marketing.h4 },
            _react2.default.createElement(
              'a',
              { target: '_blank', href: 'https://react-bootstrap.github.io/' },
              'React-Bootstrap'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: styles.marketing.p },
            'Smoothe and creative components to fit the way you want your apps to be experienced.'
          ),
          _react2.default.createElement(
            'h4',
            { style: styles.marketing.h4 },
            _react2.default.createElement(
              'a',
              { target: '_blank', href: 'https://webpack.github.io/docs/list-of-tutorials.html' },
              'Webpack'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: styles.marketing.p },
            'Webpack is a module bundler that helps you serve your application in any environment with hot reloading.'
          )
        )
      );
    }
  }]);

  return Description;
}(_react2.default.Component);

exports.default = Description;


var styles = {
  marketing: {
    margin: '40px 0',
    p: {
      marginTop: 28
    },
    h4: {
      marginTop: 28
    }
  }
};