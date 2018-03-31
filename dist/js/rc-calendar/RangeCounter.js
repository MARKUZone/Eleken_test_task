'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Conclusion(props) {
	if (props.daysRange === 1) {
		return _react2.default.createElement(
			'p',
			null,
			'Day range is: ',
			_react2.default.createElement(
				'span',
				{ className: 'counter-placeholder' },
				'1'
			),
			' day.'
		);
	} else if (props.daysRange > 1) {
		return _react2.default.createElement(
			'p',
			null,
			'Day range is: ',
			_react2.default.createElement(
				'span',
				{ className: 'counter-placeholder' },
				props.daysRange
			),
			' days.'
		);
	} else {
		return _react2.default.createElement(
			'p',
			null,
			'Select dates to count date range.'
		);
	}
}

var RangeCounter = function (_React$Component) {
	_inherits(RangeCounter, _React$Component);

	function RangeCounter(props) {
		_classCallCheck(this, RangeCounter);

		return _possibleConstructorReturn(this, (RangeCounter.__proto__ || Object.getPrototypeOf(RangeCounter)).call(this, props));
	}

	_createClass(RangeCounter, [{
		key: 'render',
		value: function render() {
			var delta = null;
			var day1 = this.props.date1;
			var day2 = this.props.date2;
			if (typeof day2 !== "string") {
				delta = Math.abs(day1 - day2) / (1000 * 3600 * 24);
				delta = Math.floor(delta) + 1;
			}
			return _react2.default.createElement(
				'div',
				{ className: 'range-counter dflex' },
				_react2.default.createElement(Conclusion, { daysRange: delta })
			);
		}
	}]);

	return RangeCounter;
}(_react2.default.Component);

exports.default = RangeCounter;