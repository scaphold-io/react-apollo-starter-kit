'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  mutation CreateUserMutation($data: CreateUserInput!) {\n    createUser(input: $data) {\n      token\n      changedUser {\n        id\n        username\n      }\n    }\n  }\n'], ['\n  mutation CreateUserMutation($data: CreateUserInput!) {\n    createUser(input: $data) {\n      token\n      changedUser {\n        id\n        username\n      }\n    }\n  }\n']);

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

var CreateUserMutation = (0, _graphqlTag2.default)(_templateObject);

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      showModal: false,
      registerEmail: '',
      registerPassword: '',
      errors: []
    };

    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this._handleRegisterEmailChange = _this._handleRegisterEmailChange.bind(_this);
    _this._handleRegisterPasswordChange = _this._handleRegisterPasswordChange.bind(_this);
    _this.validateInput = _this.validateInput.bind(_this);
    _this.registerUser = _this.registerUser.bind(_this);
    return _this;
  }

  _createClass(Register, [{
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
    key: 'validateInput',
    value: function validateInput() {
      return this.state.registerEmail && this.state.registerEmail.length && this.state.registerPassword && this.state.registerPassword.length;
    }
  }, {
    key: 'registerUser',
    value: function registerUser() {
      var _this2 = this;

      if (this.validateInput()) {
        this.props.register({
          username: this.state.registerEmail,
          password: this.state.registerPassword
        }).then(function (_ref) {
          var data = _ref.data;

          if (!data.errors) {
            debugger;
            localStorage.setItem('token', data.createUser.token);
            localStorage.setItem('user', JSON.stringify(data.createUser.changedUser));
            _this2.setState({ errors: [] });
            _reactRouter.browserHistory.push('/home');
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
    key: '_handleRegisterEmailChange',
    value: function _handleRegisterEmailChange(e) {
      this.setState({
        registerEmail: e.target.value
      });
    }
  }, {
    key: '_handleRegisterPasswordChange',
    value: function _handleRegisterPasswordChange(e) {
      this.setState({
        registerPassword: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.NavItem,
        { onClick: this.open },
        'Register',
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showModal, onHide: this.close },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Register Here!'
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
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'formRegisterEmail' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { componentClass: _reactBootstrap.ControlLabel, smOffset: 1, sm: 2 },
                    'Email'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 8 },
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'email', placeholder: 'Email', onChange: this._handleRegisterEmailChange })
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'formRegisterPassword' },
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { componentClass: _reactBootstrap.ControlLabel, smOffset: 1, sm: 2 },
                    'Password'
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { sm: 8 },
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'password', placeholder: 'Password', onChange: this._handleRegisterPasswordChange })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'primary', type: 'submit', onClick: this.registerUser },
              'Register'
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

  return Register;
}(_react2.default.Component);

var styles = {
  errors: {
    textAlign: 'left',
    color: 'red'
  }
};

var RegisterWithData = (0, _reactApollo.graphql)(CreateUserMutation, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      register: function register(data) {
        return mutate({
          variables: {
            data: data
          }
        });
      }
    };
  }
})(Register);
exports.default = RegisterWithData;