"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_React$Component) {
	_inherits(Contacts, _React$Component);

	function Contacts() {
		_classCallCheck(this, Contacts);

		return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).apply(this, arguments));
	}

	_createClass(Contacts, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			slideRevealer("contacts");
			shadowOnHover();
			aboutInteraction();
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "Contacts-comp" },
				React.createElement(
					"section",
					{ className: "contacts xslider-container" },
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"div",
							{ className: "row m0" },
							React.createElement(
								"div",
								{ className: "col" },
								React.createElement(
									"h2",
									{ className: "xslider xslider1" },
									"Contacts"
								),
								React.createElement(
									"ul",
									null,
									React.createElement(
										"li",
										{ className: "xslider xslider2" },
										React.createElement(
											"div",
											{ className: "row shadow-aim" },
											React.createElement(
												"div",
												{ className: "col dflex" },
												React.createElement(
													"div",
													{ className: "icon-holder" },
													React.createElement("i", { className: "fab fa-facebook-f" })
												),
												React.createElement(
													"h4",
													null,
													"Facebook"
												)
											),
											React.createElement(
												"div",
												{ className: "col-12 col-sm dflex" },
												React.createElement(
													"button",
													{ type: "submit", className: "dflex" },
													React.createElement(
														"a",
														{ href: "#", className: "dflex" },
														"visit page"
													)
												)
											)
										)
									),
									React.createElement(
										"li",
										{ className: "xslider xslider3" },
										React.createElement(
											"div",
											{ className: "row shadow-aim" },
											React.createElement(
												"div",
												{ className: "col dflex" },
												React.createElement(
													"div",
													{ className: "icon-holder" },
													React.createElement("i", { className: "fab fa-facebook-f" })
												),
												React.createElement(
													"h4",
													null,
													"Facebook"
												)
											),
											React.createElement(
												"div",
												{ className: "col-12 col-sm dflex" },
												React.createElement(
													"button",
													{ type: "submit", className: "dflex" },
													React.createElement(
														"a",
														{ href: "#", className: "dflex" },
														"visit page"
													)
												)
											)
										)
									),
									React.createElement(
										"li",
										{ className: "xslider xslider4" },
										React.createElement(
											"div",
											{ className: "row shadow-aim" },
											React.createElement(
												"div",
												{ className: "col dflex" },
												React.createElement(
													"div",
													{ className: "icon-holder" },
													React.createElement("i", { className: "fab fa-facebook-f" })
												),
												React.createElement(
													"h4",
													null,
													"Facebook"
												)
											),
											React.createElement(
												"div",
												{ className: "col-12 col-sm dflex" },
												React.createElement(
													"button",
													{ type: "submit", className: "dflex" },
													React.createElement(
														"a",
														{ href: "#", className: "dflex" },
														"visit page"
													)
												)
											)
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Contacts;
}(React.Component);

exports.default = Contacts;