'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Description = require('../App/Description');

var _Description2 = _interopRequireDefault(_Description);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_React$Component) {
    _inherits(Body, _React$Component);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: 'render',
        value: function render() {
            var user = JSON.parse(localStorage.getItem('user'));
            var loggedInUser = user ? user.username : '';

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { style: styles.heading },
                    'Welcome, you\'ve successfully logged in to ',
                    _react2.default.createElement(
                        'a',
                        { href: 'https://scaphold.io', target: '_blank', style: styles.scaphold },
                        'Scaphold'
                    ),
                    '\'s React Apollo Starter Kit!'
                ),
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    { style: styles.subheading },
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { smOffset: 3, sm: 6 },
                        loggedInUser ? _react2.default.createElement(
                            'div',
                            { style: styles.subheading.section },
                            'Username: ',
                            _react2.default.createElement(
                                'b',
                                null,
                                loggedInUser
                            )
                        ) : '',
                        _react2.default.createElement(
                            'div',
                            { style: styles.subheading.section },
                            'Feel free to poke around and check out the other functionality that this starter kit provides. We\'ve put together a couple tools for you to get this starter kit rolling.'
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: styles.subheading.section },
                            'So by all means, modify the code, break it, and learn about the same awesome technology that Facebook is built on.'
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: styles.subheading.section },
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { bsStyle: 'primary', bsSize: 'large', target: '_blank', href: 'https://scaphold.io' },
                                'Learn more ',
                                _react2.default.createElement(_reactFontawesome2.default, { name: 'check' })
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { style: styles.slack, bsSize: 'large', target: '_blank', href: 'http://slack.scaphold.io' },
                                'Join our Slack ',
                                _react2.default.createElement(_reactFontawesome2.default, { name: 'slack' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(_Description2.default, null)
            );
        }
    }]);

    return Body;
}(_react2.default.Component);

var styles = {
    heading: {
        padding: '100px 0 50px 0',
        fontSize: '25px',
        textAlign: 'center'
    },
    subheading: {
        padding: '0 0 50px 0',
        fontSize: '18px',
        textAlign: 'center',
        section: {
            padding: '25px'
        }
    },
    scaphold: {
        color: '#1DAAA0'
    },
    slack: {
        color: 'white',
        backgroundColor: '#1DAAA0'
    }
};

exports.default = Body;