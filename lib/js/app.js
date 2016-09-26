'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactApollo = require('react-apollo');

var _App = require('./components/App/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _GraphiQL = require('./components/GraphiQL/GraphiQL');

var _GraphiQL2 = _interopRequireDefault(_GraphiQL);

var _apollo = require('../apollo');

var _apollo2 = _interopRequireDefault(_apollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactApollo.ApolloProvider,
  { client: _apollo2.default },
  _react2.default.createElement(
    _reactRouter.Router,
    {
      history: _reactRouter.hashHistory,
      routes: _reactRouter.routes,
      render: (0, _reactRouter.applyRouterMiddleware)()
    },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/graphiql', component: _GraphiQL2.default })
  )
), document.getElementById('root'));