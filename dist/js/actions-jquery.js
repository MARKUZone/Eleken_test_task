$( "#clickme" ).click(function() {
	$( "#book" ).slideToggle( "slow", function() {
	});
});


$( "#click-field-1" ).click(function() {
	$( "#hide-field-1" ).slideToggle( "fast", function() {
	});
	$( ".fa-angle-down" ).rotate(45);
});


