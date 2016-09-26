'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query {\n    viewer {\n      allUsers {\n        totalCount: count {\n          reduction\n        }\n        countryCount: count (groupBy: "country") {\n          group\n          reduction\n        }\n        groupedHourly: count (groupBy: "createdAtHour") {\n          group\n          reduction\n        }\n      }\n      allMessages {\n        totalCount: count {\n          reduction\n        }\n        groupedHourly: count (groupBy: "createdAtHour") {\n          group\n          reduction\n        }\n      }\n    }\n  }\n'], ['\n  query {\n    viewer {\n      allUsers {\n        totalCount: count {\n          reduction\n        }\n        countryCount: count (groupBy: "country") {\n          group\n          reduction\n        }\n        groupedHourly: count (groupBy: "createdAtHour") {\n          group\n          reduction\n        }\n      }\n      allMessages {\n        totalCount: count {\n          reduction\n        }\n        groupedHourly: count (groupBy: "createdAtHour") {\n          group\n          reduction\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineChart = require("react-chartjs").Line;

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.state = {
      totalUsers: 0,
      totalMessages: 0,
      oldUser: {},
      oldMessage: {},
      userMapping: [],
      messageMapping: [],
      countryCount: []
    };
    _this.getUserMapping = _this.getUserMapping.bind(_this);
    _this.getMessageMapping = _this.getMessageMapping.bind(_this);
    _this.addToCountry = _this.addToCountry.bind(_this);
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var _this2 = this;

      setTimeout(function () {
        if (_this2.state.userMapping.length && props.newUser.id && _this2.state.oldUser !== props.newUser) {
          // Update when new user comes in
          _this2.state.totalUsers++;
          _this2.setState({
            userMapping: _this2.addNewUser(_this2.state.userMapping),
            totalUsers: _this2.state.totalUsers,
            countryCount: _this2.addToCountry(_this2.state.countryCount),
            oldUser: _this2.props.newUser
          });
        }
        if (props.newMessage.id && _this2.state.oldMessage !== props.newMessage) {
          // Update when new message comes in
          _this2.state.totalMessages++;
          _this2.setState({
            messageMapping: _this2.addNewMessage(_this2.state.messageMapping),
            totalMessages: _this2.state.totalMessages,
            oldMessage: _this2.props.newMessage
          });
        }
        if (props.data.viewer && _this2.state.totalUsers == 0 && _this2.state.totalMessages == 0) {
          // Initialize states
          _this2.setState({
            totalUsers: _this2.props.data.viewer.allUsers.totalCount[0].reduction,
            totalMessages: _this2.props.data.viewer.allMessages.totalCount[0].reduction,
            countryCount: _this2.props.data.viewer.allUsers.countryCount,
            userMapping: _this2.getUserMapping(),
            messageMapping: _this2.getMessageMapping()
          });
        }
      }, this.props.wait);
    }
  }, {
    key: 'getUserMapping',
    value: function getUserMapping() {
      var userMapping = [];
      if (this.props.data.viewer) {
        var j = void 0;
        if (!this.props.data.viewer.allUsers.groupedHourly[0].group) {
          j = 2;
        } else {
          j = 1;
        }
        for (var i = 0; i < 24; i++) {
          var grouping = this.props.data.viewer.allUsers.groupedHourly[j - 1];
          var num = void 0;
          if (grouping && grouping.group != i) {
            num = 0;
          } else if (grouping) {
            num = grouping.reduction;
            j++;
          }
          var newObj = { hour: i, num: num || 0 };
          userMapping.push(newObj);
        }
      }
      return userMapping;
    }
  }, {
    key: 'addNewUser',
    value: function addNewUser(userMapping) {
      var hour = this.props.newUser.createdAtHour;
      userMapping[hour].num++;
      return userMapping;
    }
  }, {
    key: 'getMessageMapping',
    value: function getMessageMapping() {
      var messageMapping = [];
      if (this.props.data.viewer) {
        var j = void 0;
        if (!this.props.data.viewer.allMessages.groupedHourly[0].group) {
          j = 2;
        } else {
          j = 1;
        }
        for (var i = 0; i < 24; i++) {
          var grouping = this.props.data.viewer.allMessages.groupedHourly[j - 1];
          var num = void 0;
          if (grouping && grouping.group != i) {
            num = 0;
          } else if (grouping) {
            num = grouping.reduction;
            j++;
          }
          var newObj = { hour: i, num: num || 0 };
          messageMapping.push(newObj);
        }
      }
      return messageMapping;
    }
  }, {
    key: 'addNewMessage',
    value: function addNewMessage(messageMapping) {
      var hour = this.props.newMessage.createdAtHour;
      messageMapping[hour].num++;
      return messageMapping;
    }
  }, {
    key: 'addToCountry',
    value: function addToCountry(countryCount) {
      var country = this.props.newUser.country;
      countryCount.forEach(function (countryGroup) {
        if (countryGroup.group == country) {
          countryGroup.reduction++;
        }
      });
      return countryCount;
    }
  }, {
    key: 'render',
    value: function render() {

      var userChartData = {
        labels: this.state.userMapping.map(function (item) {
          return item.hour;
        }),
        datasets: [{
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "#1daaa0",
          pointColor: "#1daaa0",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#1daaa0",
          data: this.state.userMapping.map(function (item) {
            return item.num;
          })
        }]
      };
      var messageChartData = {
        labels: this.state.messageMapping.map(function (item) {
          return item.hour;
        }),
        datasets: [{
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "#1daaa0",
          pointColor: "#1daaa0",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "#1daaa0",
          data: this.state.messageMapping.map(function (item) {
            return item.num;
          })
        }]
      };
      var chartOptions = {};

      var countryComponent = _react2.default.createElement(
        'div',
        null,
        'Count by Country: 0'
      );
      if (this.props.data.viewer) {
        countryComponent = _react2.default.createElement(
          'div',
          null,
          'Count by Country: ',
          this.state.countryCount.map(function (item, i) {
            return _react2.default.createElement(
              'div',
              { key: i },
              item.group ? item.group : 'Other',
              ' - ',
              item.reduction
            );
          })
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Chat Dashboard'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            { style: styles.numbersRow },
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4 },
              _react2.default.createElement(
                'div',
                { style: styles.numbersRow.numbers },
                this.props.data.viewer ? this.state.totalUsers : '0'
              ),
              _react2.default.createElement(
                'div',
                null,
                'Total Users'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4 },
              _react2.default.createElement(
                'div',
                { style: styles.numbersRow.numbers },
                this.props.data.viewer ? this.state.totalMessages : '0'
              ),
              _react2.default.createElement(
                'div',
                null,
                'Total Messages'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4 },
              countryComponent
            )
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h4',
              { style: styles.graph },
              'Users vs. Hour of the Day (UTC)'
            ),
            _react2.default.createElement(LineChart, { data: userChartData, options: chartOptions, height: '300%', width: '650%' }),
            _react2.default.createElement(
              'h4',
              { style: styles.graph },
              'Messages vs. Hour of the Day (UTC)'
            ),
            _react2.default.createElement(LineChart, { data: messageChartData, options: chartOptions, height: '300%', width: '650%' })
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

Dashboard.propTypes = {
  data: _react2.default.PropTypes.object
};

var GET_ALL_DATA = (0, _graphqlTag2.default)(_templateObject);

var componentWithAllData = (0, _reactApollo.graphql)(GET_ALL_DATA);

exports.default = componentWithAllData(Dashboard);


var styles = {
  numbersRow: {
    margin: '20px 20px',
    textAlign: 'center',
    numbers: {
      fontSize: '30px'
    }
  },
  graph: {
    marginTop: '40px'
  }
};