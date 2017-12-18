
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from './../assets/logo-no-bg.svg';
import launcherIconActive from './../assets/close-icon.png';
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
      launcherIcon: launcherIcon
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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: classList.join(' '), onClick: this.handleClick.bind(this) },
        React.createElement('img', { className: "sc-open-icon", src: launcherIconActive }),
        React.createElement('img', { className: "sc-closed-icon", src: launcherIcon })
      ),
      React.createElement(ChatWindow, {
        messageList: this.props.messageList,
        onUserInputSubmit: this.props.onMessageWasSent,
        agentProfile: this.props.agentProfile,
        active: this.state.active,
        onClose: this.handleClick.bind(this)
      })
    );
  };

  return Launcher;
}(Component);

Launcher.propTypes = process.env.NODE_ENV !== "production" ? {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func
} : {};

export default Launcher;