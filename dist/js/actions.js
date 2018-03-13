// reload button changes on host adress
if ( window.location.href.slice(7, 16) === "localhost" ) {
	const elem = document.getElementsByClassName("home")[0].getElementsByTagName("input")[0];
	elem.setAttribute("value", "reload at localhost");
	elem.setAttribute("onclick", "location.href='http://localhost:3000/';");
}


// test p change
function testClick() {
	const elements = document.getElementsByClassName("test-block")[0].getElementsByClassName("row")[0].getElementsByTagName("div");
	console.log( elements );
	elements = Array.prototype.slice.call(elements);
	elements.forEach(function(elem, i, arr) {
		console.log(arr(i));
	});
	elements[1].innerHTML = "It's working!";
	
}


