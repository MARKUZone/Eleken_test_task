// test
$( "#clickme" ).click(function() {
	$( "#book" ).slideToggle( "slow", function() {
	});
});



// reveal additional info at About blocks and rotate its arrow on click
$( "#click-field-1" ).click(function() {
	$( "#hide-field-1" ).slideToggle( 500, function() {
	});
	if ($( ".fa-angle-down" ).attr("aria-hidden") == "true" ) {
		$( ".fa-angle-down" ).css({"transform": "rotate(180deg)"});
		$( ".fa-angle-down" ).attr("aria-hidden", "false");
	} else {
		$( ".fa-angle-down" ).css({"transform": "rotate(0deg)"});
		$( ".fa-angle-down" ).attr("aria-hidden", "true");
	}
});



