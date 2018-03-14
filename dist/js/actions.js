// 'reload button' changes on host address
if ( window.location.href.slice(7, 16) === "localhost" ) {
	const elem = document.getElementsByClassName("home")[0].getElementsByTagName("input")[0];
	elem.setAttribute("value", "reload at localhost");
	elem.setAttribute("onclick", "location.href='http://localhost:3000/';");
	elem.style.backgroundColor = "#7C7";
}


// test div text change
function testClick() {
	let elements = document.getElementsByClassName("test-block")[0].getElementsByClassName("row")[0].getElementsByTagName("div");
	console.log( elements, elements.length );
	elements = Array.prototype.slice.call(elements);
	elements.forEach(function(elem, i, elements) {
		console.log(elements[i], " --- ", elements[i].innerHTML);
		elements[i].innerHTML = "Element # " + (i + 1);
	});
	// вместо строк 14-18 можно прописать блок ниже
	/*for ( let i = 0 ; i < elements.length ; i++ ) {
		console.log(elements[i]);
		elements[i].innerHTML = "Element # " + (i + 1);
	}*/
	for ( i in elements ) {
		console.log(i, " --- ", elements[i], " --- ", elements[i].innerHTML);
	}
}


