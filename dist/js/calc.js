'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('rc-calendar/assets/index.css');

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _RangeCalendar = require('rc-calendar/lib/RangeCalendar');

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _ru_RU = require('rc-calendar/lib/locale/ru_RU');

var _ru_RU2 = _interopRequireDefault(_ru_RU);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _RangeCounter = require('../../dist/js/rc-calendar/RangeCounter');

var _RangeCounter2 = _interopRequireDefault(_RangeCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calc = function Calc() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h2',
			null,
			'This is Calculator page'
		),
		_react2.default.createElement(_RangeCalendar2.default, { locale: _ru_RU2.default, onChange: function onChange(e) {
				alert('Change smthn');
			} }),
		_react2.default.createElement(_RangeCounter2.default, null)
	);
};

exports.default = Calc;