'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.myPrinter = undefined;

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

var _RangeCounter = require('../../dist/js/rc-calendar/RangeCounter');

var _RangeCounter2 = _interopRequireDefault(_RangeCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function myPrinter(arr) {
	arr.forEach(function (item, i, arr) {
		//alert( i + ": " + item + " (массив:" + arr + ")" );
		//console.log([i + 1] + `. ${item} = ` + item + " ;  its type - " + typeof item);
		alert("myPrinter is online");
		if (i === arr.length) {
			console.log("--------------   end of method passing   --------------");
		}
	});
}

var Calc = function (_React$Component) {
	_inherits(Calc, _React$Component);

	function Calc(props) {
		_classCallCheck(this, Calc);

		var _this = _possibleConstructorReturn(this, (Calc.__proto__ || Object.getPrototypeOf(Calc)).call(this, props));

		_this.state = {
			nikValue: "initial value"
		};
		_this.getNikValue = _this.getNikValue.bind(_this);
		return _this;
	}

	_createClass(Calc, [{
		key: 'getNikValue',
		value: function getNikValue(input) {
			this.setState({ nikValue: input });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					'This is Calculator page'
				),
				_react2.default.createElement(_RangeCalendar.RangeCalendar, { locale: _ru_RU2.default,
					onChange: function onChange(value) {
						return console.log(value);
					}
					//<!--	onSelect = {this.getNikValue} -->
				}),
				_react2.default.createElement(_RangeCounter2.default, { nVal: 'this.state.nikValue' }),
				_react2.default.createElement(
					'p',
					null,
					'My Range must be here: ',
					this.state.nikValue
				)
			);
		}
	}]);

	return Calc;
}(_react2.default.Component);

console.log("myTestVar = " + _RangeCalendar.myTestVar);

exports.default = Calc;
exports.myPrinter = myPrinter;