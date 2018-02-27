'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RangeCounter(props) {
  return _react2.default.createElement(
    'div',
    { className: 'range-counter' },
    _react2.default.createElement(
      'p',
      null,
      'This is special value: ',
      props.nVal,
      '.'
    )
  );
}

alert("It's your lucky day! \n RangeCounter.js is loaded");

exports.default = RangeCounter;