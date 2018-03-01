"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function myPrinter(inp) {
	console.log("--------------   beginning of myPrinter   --------------");
	Object.getOwnPropertyNames(inp).forEach(function (item, i, arr) {
		console.log(item + ' = ' + inp[item] + " ;  its type - " + _typeof(inp[item]));
	});
	console.log("--------------   end of myPrinter   --------------");
}

exports.default = myPrinter;