// xslider animation after page load
function slideRevealer(section) {
	function xslider(item) {
		$( item ).animate({
			opacity: 1,
			left: "-=2400"
		}, 1000, function() {
			// Animation complete.
		});
	}
	const blocks = document.querySelectorAll('.' + section + ' .xslider').length;
	for ( let i = 1; i <= blocks; ++i ) {
		const item = ".xslider" + i;
		const delay = i*350;
		setTimeout( () => xslider(item), delay);
	}
}



// slideToggle additional info at About blocks and rotate its arrow on click
function aboutInteraction() {
	let infoBlocks = $( ".click-field" );
	Array.prototype.forEach.call(infoBlocks, (item, i) => {
		rollDown(item);
	});
	function rollDown(item) {
		const hideElement = "." + item.parentElement.classList[1] + " .hide-block";
		const arrowElement = "." + item.parentElement.classList[1] + " .fa-angle-down";
		item.addEventListener('click', function() {
			$( hideElement ).slideToggle( 500 );
			if ($( arrowElement ).attr("aria-hidden") == "true" ) {
				$( arrowElement ).css({"transform": "rotate(-180deg)"});
				$( arrowElement ).attr("aria-hidden", "false");
			} else {
				$( arrowElement ).css({"transform": "rotate(0deg)"});
				$( arrowElement ).attr("aria-hidden", "true");
			}
		});
	}
}



// adds autohiding of revealed navbar menu on element click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});



