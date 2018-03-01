'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangeCounter = function (_React$Component) {
	_inherits(RangeCounter, _React$Component);

	function RangeCounter(props) {
		_classCallCheck(this, RangeCounter);

		var _this = _possibleConstructorReturn(this, (RangeCounter.__proto__ || Object.getPrototypeOf(RangeCounter)).call(this, props));

		_this.onChanges = _this.onChanges.bind(_this);
		_this.state = {
			date1: _this.props.date1,
			date2: _this.props.date2
		};
		return _this;
	}

	_createClass(RangeCounter, [{
		key: 'onChanges',
		value: function onChanges() {
			alert("Changes detected!");
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'range-counter' },
				_react2.default.createElement(
					'p',
					null,
					'This is date1: ',
					this.state.date1,
					'.'
				),
				_react2.default.createElement(
					'p',
					null,
					'This is date2: ',
					this.state.date2,
					'.'
				)
			);
		}
	}]);

	return RangeCounter;
}(_react2.default.Component);

exports.default = RangeCounter;