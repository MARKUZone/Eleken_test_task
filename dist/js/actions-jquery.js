$( "#clickme" ).click(function() {
	$( "#book" ).slideToggle( "slow", function() {
	});
});

$( ".about .row .row" ).click(function() {
	$( ".about .row .row col p" ).slideToggle( "fast", function() {
	});
});

