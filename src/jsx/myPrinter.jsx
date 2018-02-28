function myPrinter(arr) {
	console.log("--------------   beginning of myPrinter   --------------");
	arr.forEach(function(item, i, arr) {
		//alert( i + ": " + item + " (массив:" + arr + ")" );
		console.log([i + 1] + ". " + item.toString() + " = " + item + " ;  its type - " + typeof(item));
	});
	console.log("--------------   end of myPrinter   --------------");
}

export default myPrinter;
