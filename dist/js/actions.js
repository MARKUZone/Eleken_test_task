// 'reload button' changes on host address
/*function linkGen() {
	const elem = document.getElementsByClassName("home")[0].getElementsByTagName("input")[0];
	if ( window.location.href.slice(7, 16) === "localhost" ) {
		elem.setAttribute("value", "reload at localhost");
		elem.setAttribute("onclick", "location.href='http://localhost:3000/';");
		elem.style.backgroundColor = "#7C7";
	} else {
		elem.setAttribute("value", "reload at github");
		elem.setAttribute("onclick", "location.href='https://markuzone.github.io/Eleken_test_task/';");
	}
}*/
function linkGen() {
	const elem = document.getElementsByClassName("navbar-brand")[0];
	if ( window.location.href.slice(7, 16) === "localhost" ) {
		elem.setAttribute("title", "reload at localhost");
		elem.setAttribute("href", "http://localhost:3000/");
	} else {
		elem.setAttribute("title", "click to reload page");
		elem.setAttribute("href", "https://NikitaVolkov87.github.io/Calendar_Day_Diff_App-React-/");
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
	// вместо 5 строк выше можно прописать блок ниже
	/*for ( let i = 0 ; i < elements.length ; i++ ) {
		console.log(elements[i]);
		elements[i].innerHTML = "Element # " + (i + 1);
	}*/
	for ( i in elements ) {
		console.log(i, " --- ", elements[i], " --- ", elements[i].innerHTML);
	}
}



// put shadow on hovered About block
function shadowOnHover() {
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
}



// keeps navbar link active while not switched to another link
let navbarLinks = document.getElementsByClassName('nav-link');
let awayElements = document.getElementsByClassName('away-aim');
Array.prototype.forEach.call(navbarLinks, (item, i, array) => {
	item.addEventListener('click', function () {
		this.classList.add('activeLink');
		Array.prototype.forEach.call(navbarLinks, (item2, i2, array2) => {
			if ( i != i2 ) {
				item2.classList.remove('activeLink');
			}
		});
		Array.prototype.forEach.call(awayElements, (item, i, array) => {
			item.classList.add('away');
		});
	});
});



// test button
let counter = 0;
document.getElementById("test-button").onclick = () => {
	counter++;
	document.getElementsByClassName("test-el")[0].innerHTML = "button function worked: " + counter;
	document.getElementsByClassName("away-aim")[0].classList.toggle("away");
}



// display: none 0.5 sec before comp mount
function delayedDnone(section) {
	setTimeout(function() {
		document.getElementsByClassName(section + '-comp')[0].classList.remove('dnone');
		document.getElementsByClassName("invitation")[0].classList.add('dnone');
	}, 500);
}



// correct page depending on navbar height
/*function navbarHeight() {
	let height = document.getElementsByClassName('navbar')[0].offsetHeight;
	console.log("height = " + height);
}
document.getElementsByClassName('navbar')[0].addEventListener('click', () => {
	navbarHeight();
});*/



