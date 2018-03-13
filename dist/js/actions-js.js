if ( window.location.href.slice(7, 16) === "localhost" ) {
	//alert("site is opened on localhost");
	//document.getElementsByClassName("home")[0].childNodes[0]
	//document.getElementsByClassName("home")[0].childNodes[1].style.opacity = "1";
	const elem = document.getElementsByClassName("home")[0].getElementsByTagName("input")[0];
	elem.setAttribute("value", "reload at localhost");
	elem.setAttribute("onclick", "location.href='http://localhost:3000/';");
}

