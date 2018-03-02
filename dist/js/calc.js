'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('rc-calendar/assets/index.css');

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _ru_RU = require('rc-calendar/lib/locale/ru_RU');

var _ru_RU2 = _interopRequireDefault(_ru_RU);

var _RangeCalendar = require('rc-calendar/lib/RangeCalendar');

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _RangeCounter = require('../../dist/js/rc-calendar/RangeCounter');

var _RangeCounter2 = _interopRequireDefault(_RangeCounter);

var _myPrinter = require('../../dist/js/myPrinter');

var _myPrinter2 = _interopRequireDefault(_myPrinter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calc = function (_React$Component) {
	_inherits(Calc, _React$Component);

	function Calc(props) {
		_classCallCheck(this, Calc);

		var _this = _possibleConstructorReturn(this, (Calc.__proto__ || Object.getPrototypeOf(Calc)).call(this, props));

		_this.state = {
			date1: "",
			date2: ""
		};
		_this.getRange = _this.getRange.bind(_this);
		return _this;
	}

	_createClass(Calc, [{
		key: 'getRange',
		value: function getRange(input) {
			if (Object.keys(input).length === 2) {
				this.setState({ date1: input[0]._d.toString() });
				this.setState({ date2: input[1]._d.toString() });
				var item1 = input[0]._d.toString().split(" ").slice(1, 4);
				(0, _myPrinter2.default)({
					//"Object.keys(input).length": Object.keys(input).length, // trigger
					"item1": item1,
					"item1[0]": item1[0]
				});
				console.log(item1, typeof item1 === 'undefined' ? 'undefined' : _typeof(item1));
				console.log(item1[0], _typeof(item1[0]));
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					'This is Calculator page'
				),
				_react2.default.createElement(_RangeCalendar2.default, {
					locale: _ru_RU2.default,
					onChange: function onChange(value) {
						return _this2.getRange(value);
					}
				}),
				_react2.default.createElement(_RangeCounter2.default, {
					date1: this.state.date1,
					date2: this.state.date2
				})
			);
		}
	}]);

	return Calc;
}(_react2.default.Component);

exports.default = Calc;