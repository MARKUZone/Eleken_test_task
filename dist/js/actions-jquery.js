// test
/*$( "#clickme" ).click(function() {
	$( "#book" ).slideToggle( "slow", function() {
	});
});*/
$( "#clickme" ).click(function() {
	$( ".xslider" ).animate({
		opacity: 1,
		left: "-=2400"
		//display: "block"
		//height: "toggle"
	}, 1000, function() {
		// Animation complete.
	});
});
function xslider(item) {
	$( item ).animate({
		opacity: 1,
		left: "-=2400"
	}, 1000, function() {
		// Animation complete.
	});
}
$( document ).ready(function() {
	const blocks = 3;
	for ( let i = 1; i <= blocks; ++i ) {
		const item = ".xslider" + i;
		const delay = i*350;
		console.log(item, delay);
		setTimeout( () => xslider(item), delay);
	}
});



// reveal additional info at About blocks and rotate its arrow on click
$( ".click-field" ).click(function() {
	console.log(this);
	$( ".hide-block" ).slideToggle( 500, function() {
	});
	if ($( ".fa-angle-down" ).attr("aria-hidden") == "true" ) {
		$( ".fa-angle-down" ).css({"transform": "rotate(180deg)"});
		$( ".fa-angle-down" ).attr("aria-hidden", "false");
	} else {
		$( ".fa-angle-down" ).css({"transform": "rotate(0deg)"});
		$( ".fa-angle-down" ).attr("aria-hidden", "true");
	}
});



