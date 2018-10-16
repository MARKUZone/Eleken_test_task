"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
	_inherits(About, _React$Component);

	function About() {
		_classCallCheck(this, About);

		return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	}

	_createClass(About, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			delayedDnone("about");
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			slideRevealer("about");
			shadowOnHover();
			aboutInteraction();
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "about-comp dnone away-aim" },
				React.createElement(
					"section",
					{ className: "about xslider-container" },
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
									"Calendar date range finder app"
								),
								React.createElement(
									"ul",
									null,
									React.createElement(
										"li",
										{ className: "xslider xslider2" },
										React.createElement(
											"div",
											{ className: "row shadow-aim click-field" },
											React.createElement(
												"div",
												{ className: "col-1 dflex" },
												React.createElement("i", { "class": "fas fa-info" })
											),
											React.createElement(
												"div",
												{ className: "col" },
												React.createElement(
													"a",
													{ href: "#", className: "dflex" },
													React.createElement(
														"h4",
														null,
														"How to use App"
													),
													React.createElement("i", { className: "fas fa-angle-down" })
												),
												React.createElement(
													"div",
													{ className: "hide-block" },
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"1"
														),
														" Click on Calendar menu item (or menu button if navbar is collapsed)"
													),
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"2"
														),
														" Click on first day of interested day range and than click on the second one"
													),
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"3"
														),
														" Under Calendar you will see day range counter which shows current number of days in selected range"
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
											{ className: "row shadow-aim click-field" },
											React.createElement(
												"div",
												{ className: "col-1 dflex" },
												React.createElement("i", { "class": "fas fa-terminal" })
											),
											React.createElement(
												"div",
												{ className: "col" },
												React.createElement(
													"a",
													{ href: "#", className: "dflex" },
													React.createElement(
														"h4",
														null,
														"How to install App"
													),
													React.createElement("i", { className: "fas fa-angle-down" })
												),
												React.createElement(
													"div",
													{ className: "hide-block" },
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"1"
														),
														" ",
														React.createElement(
															"i",
															null,
															React.createElement(
																"u",
																null,
																"git clone"
															)
														),
														" this ",
														React.createElement(
															"a",
															{ href: "https://github.com/NikitaVolkov87/Calendar_Day_Diff_App-React-" },
															"repo"
														)
													),
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"2"
														),
														" Install App with ",
														React.createElement(
															"i",
															null,
															React.createElement(
																"u",
																null,
																"npm i"
															)
														)
													),
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"3"
														),
														" Start local server by executing in cmd ",
														React.createElement(
															"i",
															null,
															React.createElement(
																"u",
																null,
																"npm run server"
															)
														)
													),
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"4"
														),
														" Open ",
														React.createElement(
															"i",
															null,
															React.createElement(
																"u",
																null,
																"localhost:3000"
															)
														)
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
											{ className: "row shadow-aim click-field" },
											React.createElement(
												"div",
												{ className: "col-1 dflex" },
												React.createElement("i", { className: "fas fa-clipboard-list" })
											),
											React.createElement(
												"div",
												{ className: "col" },
												React.createElement(
													"a",
													{ href: "#", className: "dflex" },
													React.createElement(
														"h4",
														null,
														"Technologies used in this App"
													),
													React.createElement("i", { className: "fas fa-angle-down" })
												),
												React.createElement(
													"div",
													{ className: "hide-block" },
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"1"
														),
														" JS, React, React Router"
													),
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"2"
														),
														" git, gulp, webpack, npm"
													),
													React.createElement(
														"p",
														null,
														React.createElement(
															"b",
															null,
															"3"
														),
														" SASS, jQuery, bootstrap 4"
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

	return About;
}(React.Component);

exports.default = About;