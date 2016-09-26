'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = createRoutes;

var _auth = require('./auth');

var errorLoading = function errorLoading(err) {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

var loadModule = function loadModule(cb) {
  return function (componentModule) {
    cb(null, componentModule.default);
  };
};

function requireAuth(nextState, replace) {
  if (!(0, _auth.loggedIn)()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function createRoutes() {

  return [{
    path: '/',
    name: 'landing',
    getComponent: function getComponent(nextState, cb) {
      var importModules = Promise.all([require('./components/App/App')]);

      var renderRoute = loadModule(cb);

      importModules.then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1);

        var component = _ref2[0];

        renderRoute(component);
      });

      importModules.catch(errorLoading);
    }
  }, {
    path: '/home',
    name: 'home',
    // onEnter: requireAuth,
    getComponent: function getComponent(nextState, cb) {
      var importModules = Promise.all([require('./components/Home/Home')]);

      var renderRoute = loadModule(cb);

      importModules.then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1);

        var component = _ref4[0];

        renderRoute(component);
      });

      importModules.catch(errorLoading);
    }
  }];
}