// 'reload button' changes on host address
function linkGen() {
	if ( window.location.href.slice(7, 16) === "localhost" ) {
		const elem = document.getElementsByClassName("home")[0].getElementsByTagName("input")[0];
		elem.setAttribute("value", "reload at localhost");
		elem.setAttribute("onclick", "location.href='http://localhost:3000/';");
		elem.style.backgroundColor = "#7C7";
	} else {
		elem.setAttribute("value", "reload at github");
		elem.setAttribute("onclick", "location.href='https://markuzone.github.io/Eleken_test_task/';");
	}
}
window.onload = () => linkGen();



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



// put shadow on hovered About block
let squareElements = document.getElementsByClassName('shadow-aim');
Array.prototype.forEach.call(squareElements, item => {
	shadow(item);
});
function shadow(item) {
	item.addEventListener('mouseover', function () {
		this.classList.add('shadow');
	});
	item.addEventListener('mouseout', function () {
		this.classList.remove('shadow');
	});
}



// keeps navbar link active while not switched to another link
let navbarLinks = document.getElementsByClassName('nav-link');
console.log(navbarLinks);
Array.prototype.forEach.call(navbarLinks, item => {
	item.addEventListener('click', function () {
		this.classList.add('activeLink');
	});
});
//document.getElementById("test-button").onclick = () => alert('ok');
let navbarLinks2 = document.getElementsByClassName('test-el');
Array.prototype.forEach.call(navbarLinks2, item => {
	item.addEventListener('click', function () {
		alert('ok');
	});
});
document.getElementById("test-button").onclick = () => {
	console.log("button worked!");
	document.getElementsByClassName('nav-link')[2].classList.add('activeLink');
};

var rect = document.getElementsByClassName('nav-link')[0].getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);



