'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function loggedIn() {
  return !!localStorage.getItem('token');
}

exports.loggedIn = loggedIn;