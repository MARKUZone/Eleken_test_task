function myPrinter(inp) {
	console.log("--------------   beginning of myPrinter   --------------");
	Object.getOwnPropertyNames(inp).forEach(function(item, i, arr) {
		console.log(item + ' = ' + inp[item] + " ;  its type - " + typeof(inp[item]));
	});
	console.log("--------------   end of myPrinter   --------------");
}

export default myPrinter;
