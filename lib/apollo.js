'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = require('apollo-client');

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var networkInterface = (0, _apolloClient.createNetworkInterface)(_config2.default.scapholdUrl);
networkInterface.use([{
  applyMiddleware: function applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the header object if needed.
    }
    if (localStorage.getItem('token')) {
      req.options.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    next();
  }
}]);

var client = new _apolloClient2.default({
  networkInterface: networkInterface
});

exports.default = client;