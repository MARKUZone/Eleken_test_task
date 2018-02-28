"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function myPrinter(arr) {
	console.log("--------------   beginning of myPrinter   --------------");
	arr.forEach(function (item, i, arr) {
		//alert( i + ": " + item + " (массив:" + arr + ")" );
		console.log([i + 1] + ". " + item.toString() + " = " + item + " ;  its type - " + (typeof item === "undefined" ? "undefined" : _typeof(item)));
	});
	console.log("--------------   end of myPrinter   --------------");
}

exports.default = myPrinter;