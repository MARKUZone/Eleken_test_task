"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _createBrowserHistory = require("history/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _about = require("./about");

var _about2 = _interopRequireDefault(_about);

var _calc = require("./calc");

var _calc2 = _interopRequireDefault(_calc);

var _contacts = require("./contacts");

var _contacts2 = _interopRequireDefault(_contacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var history = (0, _createBrowserHistory2.default)();

/*const About = () => (
	<div>
		<h2>This is About page</h2>
	</div>
)

const Calc = () => (
	<div>
		<h2>Calculator</h2>
		<Calendar />
	</div>
)

const Contacts = () => (
	<div>
		<h2>Contacts</h2>
	</div>
)*/

var Navigation = function (_React$Component) {
	_inherits(Navigation, _React$Component);

	function Navigation() {
		_classCallCheck(this, Navigation);

		return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
	}

	_createClass(Navigation, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				_reactRouterDom.BrowserRouter,
				{ history: history },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"ul",
						null,
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: "/about" },
								"About"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: "/calc" },
								"Calculator"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: "/contacts" },
								"Contacts"
							)
						)
					),
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/about", component: _about2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: "/calc", component: _calc2.default }),
					_react2.default.createElement(_reactRouterDom.Route, { path: "/contacts", component: _contacts2.default })
				)
			);
		}
	}]);

	return Navigation;
}(_react2.default.Component);

ReactDOM.render(_react2.default.createElement(Navigation, null), document.getElementById('root'));