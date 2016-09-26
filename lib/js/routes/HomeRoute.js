'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HomeQueries = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.prepareHomeParams = prepareHomeParams;

var _config = require('./../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var HomeQueries = exports.HomeQueries = {};

function prepareHomeParams(params, _ref) {
	_objectDestructuringEmpty(_ref);

	return _extends({}, params);
}