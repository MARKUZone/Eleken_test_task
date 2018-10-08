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
		key: "componentWillMount",
		value: function componentWillMount() {
			delayedDnone("contacts");
		}
	}, {
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
				{ className: "contacts-comp dnone away-aim" },
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
													{ className: "icon-holder dflex" },
													React.createElement("i", { "class": "fas fa-mobile-alt" })
												),
												React.createElement(
													"h4",
													null,
													"Phone"
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
														{ href: "tel:+38-095-344-94-16", className: "dflex", target: "_blank" },
														"Call me"
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
													{ className: "icon-holder dflex" },
													React.createElement("i", { "class": "fas fa-at" })
												),
												React.createElement(
													"h4",
													null,
													"Email"
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
														{ href: "mailto:2545442@gmail.com", className: "dflex", target: "_blank" },
														"Write me"
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
													{ className: "icon-holder dflex" },
													React.createElement("img", { src: "https://markuzone.github.io/Eleken_test_task/ref/Djinni_Logo.svg", alt: "" })
												),
												React.createElement(
													"h4",
													null,
													"djinni.co profile"
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
														{ href: "https://djinni.co/q/1c496021/", className: "dflex", target: "_blank" },
														"Visit page"
													)
												)
											)
										)
									),
									React.createElement(
										"li",
										{ className: "xslider xslider5" },
										React.createElement(
											"div",
											{ className: "row shadow-aim" },
											React.createElement(
												"div",
												{ className: "col dflex" },
												React.createElement(
													"div",
													{ className: "icon-holder dflex" },
													React.createElement("i", { "class": "fab fa-github" })
												),
												React.createElement(
													"h4",
													null,
													"GitHub profile"
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
														{ href: "https://github.com/MARKUZone", className: "dflex", target: "_blank" },
														"Visit page"
													)
												)
											)
										)
									),
									React.createElement(
										"li",
										{ className: "xslider xslider6" },
										React.createElement(
											"div",
											{ className: "row shadow-aim" },
											React.createElement(
												"div",
												{ className: "col-12 col-sm-6 dflex" },
												React.createElement(
													"div",
													{ className: "icon-holder dflex" },
													React.createElement("i", { "class": "far fa-file-pdf" })
												),
												React.createElement(
													"h4",
													null,
													"PDF CVs"
												)
											),
											React.createElement(
												"div",
												{ className: "col-12 col-sm-6 dflex" },
												React.createElement(
													"div",
													{ className: "row" },
													React.createElement(
														"div",
														{ className: "col-12 col-lg-6 dflex" },
														React.createElement(
															"button",
															{ type: "submit", className: "dflex" },
															React.createElement(
																"a",
																{ href: "https://goo.gl/RZL54X", className: "dflex", target: "_blank" },
																"English"
															)
														)
													),
													React.createElement(
														"div",
														{ className: "col-12 col-lg-6 dflex" },
														React.createElement(
															"button",
															{ type: "submit", className: "dflex" },
															React.createElement(
																"a",
																{ href: "https://goo.gl/ZfCvwy", className: "dflex", target: "_blank" },
																"Russian"
															)
														)
													)
												)
											)
										)
									),
									React.createElement(
										"li",
										{ className: "xslider xslider7" },
										React.createElement(
											"div",
											{ className: "row shadow-aim" },
											React.createElement(
												"div",
												{ className: "col-12 col-sm-6 dflex" },
												React.createElement(
													"div",
													{ className: "icon-holder dflex" },
													React.createElement("i", { "class": "fas fa-code" })
												),
												React.createElement(
													"h4",
													null,
													"My other works"
												)
											),
											React.createElement(
												"div",
												{ className: "col-12 col-sm-6 dflex" },
												React.createElement(
													"div",
													{ className: "row" },
													React.createElement(
														"div",
														{ className: "col-12 col-lg-6 dflex" },
														React.createElement(
															"button",
															{ type: "submit", className: "dflex" },
															React.createElement(
																"a",
																{ href: "https://markuzone.github.io/React_calculator/", className: "dflex", target: "_blank" },
																"React Calculator"
															)
														)
													),
													React.createElement(
														"div",
														{ className: "col-12 col-lg-6 dflex" },
														React.createElement(
															"button",
															{ type: "submit", className: "dflex" },
															React.createElement(
																"a",
																{ href: "https://markuzone.github.io/", className: "dflex", target: "_blank" },
																"Adaptive Watchshop website"
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
					)
				)
			);
		}
	}]);

	return Contacts;
}(React.Component);

exports.default = Contacts;