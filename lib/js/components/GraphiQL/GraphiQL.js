'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _graphiql = require('graphiql');

var _graphiql2 = _interopRequireDefault(_graphiql);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = require('./../../../config');

var _config2 = _interopRequireDefault(_config);

var _Header = require('./../App/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Header3 = require('./../Home/Header');

var _Header4 = _interopRequireDefault(_Header3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function graphQLFetcher(graphQLParams) {
  return (0, _isomorphicFetch2.default)(_config2.default.scapholdUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token ? 'Bearer ' + localStorage.token : ''
    },
    body: JSON.stringify(graphQLParams)
  }).then(function (response) {
    return response.json();
  });
}

var GraphiQLModule = function (_React$Component) {
  _inherits(GraphiQLModule, _React$Component);

  function GraphiQLModule() {
    _classCallCheck(this, GraphiQLModule);

    return _possibleConstructorReturn(this, (GraphiQLModule.__proto__ || Object.getPrototypeOf(GraphiQLModule)).apply(this, arguments));
  }

  _createClass(GraphiQLModule, [{
    key: 'render',
    value: function render() {
      var header = void 0;
      if (!localStorage.token) {
        header = _react2.default.createElement(_Header2.default, null);
      } else {
        header = _react2.default.createElement(_Header4.default, null);
      }

      return _react2.default.createElement(
        'span',
        null,
        header,
        _react2.default.createElement(_graphiql2.default, { fetcher: graphQLFetcher })
      );
    }
  }]);

  return GraphiQLModule;
}(_react2.default.Component);

exports.default = GraphiQLModule;