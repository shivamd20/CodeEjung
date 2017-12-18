'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatWindow = require('./ChatWindow');

var _ChatWindow2 = _interopRequireDefault(_ChatWindow);

var _logoNoBg = require('./../assets/logo-no-bg.svg');

var _logoNoBg2 = _interopRequireDefault(_logoNoBg);

var _closeIcon = require('./../assets/close-icon.png');

var _closeIcon2 = _interopRequireDefault(_closeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Launcher = function (_Component) {
  _inherits(Launcher, _Component);

  function Launcher() {
    _classCallCheck(this, Launcher);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      active: false,
      launcherIcon: _logoNoBg2.default
    };
    return _this;
  }

  Launcher.prototype.handleClick = function handleClick() {
    this.setState({
      active: !this.state.active
    });
  };

  Launcher.prototype.render = function render() {
    var classList = ['sc-launcher', this.state.active ? ' active' : ''];
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: classList.join(' '), onClick: this.handleClick.bind(this) },
        _react2.default.createElement('img', { className: "sc-open-icon", src: _closeIcon2.default }),
        _react2.default.createElement('img', { className: "sc-closed-icon", src: _logoNoBg2.default })
      ),
      _react2.default.createElement(_ChatWindow2.default, {
        messageList: this.props.messageList,
        onUserInputSubmit: this.props.onMessageWasSent,
        agentProfile: this.props.agentProfile,
        active: this.state.active,
        onClose: this.handleClick.bind(this)
      })
    );
  };

  return Launcher;
}(_react.Component);

Launcher.propTypes = process.env.NODE_ENV !== "production" ? {
  onMessageWasReceived: _propTypes2.default.func,
  onMessageWasSent: _propTypes2.default.func
} : {};

exports.default = Launcher;
module.exports = exports['default'];