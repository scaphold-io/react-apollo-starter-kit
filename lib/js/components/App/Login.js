'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  mutation LoginUserMutation($data: LoginUserInput!) {\n    loginUser(input: $data) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n'], ['\n  mutation LoginUserMutation($data: LoginUserInput!) {\n    loginUser(input: $data) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

var _config = require('./../../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginUserMutation = (0, _graphqlTag2.default)(_templateObject);

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      showModal: false,
      loginEmail: '',
      loginPassword: '',
      errors: []
    };
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this._handleLoginEmailChange = _this._handleLoginEmailChange.bind(_this);
    _this._handleLoginPasswordChange = _this._handleLoginPasswordChange.bind(_this);
    _this.validateInput = _this.validateInput.bind(_this);
    _this.loginUser = _this.loginUser.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'close',
    value: function close() {
      this.setState({ showModal: false });
    }
  }, {
    key: 'open',
    value: function open() {
      this.setState({ showModal: true });
    }
  }, {
    key: '_handleLoginEmailChange',
    value: function _handleLoginEmailChange(e) {
      this.setState({
        loginEmail: e.target.value
      });
    }
  }, {
    key: '_handleLoginPasswordChange',
    value: function _handleLoginPasswordChange(e) {
      this.setState({
        loginPassword: e.target.value
      });
    }
  }, {
    key: 'validateInput',
    value: function validateInput() {
      return this.state.loginEmail && this.state.loginEmail.length && this.state.loginPassword && this.state.loginPassword.length;
    }
  }, {
    key: 'loginUser',
    value: function loginUser() {
      var _this2 = this;

      if (this.validateInput()) {
        this.props.login({
          username: this.state.loginEmail,
          password: this.state.loginPassword
        }).then(function (_ref) {
          var data = _ref.data;

          if (!data.errors) {
            localStorage.setItem('token', data.loginUser.token);
            localStorage.setItem('user', JSON.stringify(data.loginUser.user));
            _this2.setState({ errors: [] });
            _reactRouter.hashHistory.push('/home');
          } else {
            _this2.setState({ errors: data.errors });
          }
        }).catch(function (errors) {
          _this2.setState({ errors: errors.graphQLErrors });
        });
      } else {
        this.setState({
          errors: [{
            message: 'Username or password was not filled out. Please fill out the required fields.'
          }]
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.NavItem,
        { onClick: this.open },
        'Login',
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showModal, onHide: this.close },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Login Here!'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              'div',
              { style: styles.errors },
              this.state.errors.map(function (err, i) {
                return _react2.default.createElement(
                  _reactBootstrap.Alert,
                  { key: i, bsStyle: 'danger' },
                  err.message
                );
              })
            ),
            _react2.default.createElement(
              _reactBootstrap.Form,
              { horizontal: true },
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'formLoginEmail' },
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { componentClass: _reactBootstrap.ControlLabel, smOffset: 1, sm: 2 },
                  'Email'
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 8 },
                  _react2.default.createElement(_reactBootstrap.FormControl, { type: 'email', placeholder: 'Email', onChange: this._handleLoginEmailChange })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'formLoginPassword' },
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { componentClass: _reactBootstrap.ControlLabel, smOffset: 1, sm: 2 },
                  'Password'
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { sm: 8 },
                  _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', placeholder: 'Password', onChange: this._handleLoginPasswordChange })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'primary', type: 'submit', onClick: this.loginUser },
              'Login'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.close },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

var styles = {
  errors: {
    textAlign: 'left',
    color: 'red'
  }
};

var LoginWithData = (0, _reactApollo.graphql)(LoginUserMutation, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      login: function login(data) {
        return mutate({
          variables: {
            data: data
          }
        });
      }
    };
  }
})(Login);
exports.default = LoginWithData;