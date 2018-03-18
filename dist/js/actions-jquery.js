// xslider animation after page load
function aboutRevealer() {
	console.log("ok_10");
	let aboutRevealed = false;
	function xslider(item) {
		console.log("ok_5");
		$( item ).animate({
			opacity: 1,
			left: "-=2400"
		}, 1000, function() {
			// Animation complete.
			console.log("ok_6");
		});
		console.log("ok_7");
	}
	console.log("ok_1");
	if ( !aboutRevealed ) {
		const blocks = document.querySelectorAll('.about .xslider').length;
		console.log("ok_2");
		console.log("blocks = ", blocks);
		for ( let i = 1; i <= blocks; ++i ) {
			const item = ".xslider" + i;
			const delay = i*350;
			console.log("ok_3");
			setTimeout( () => xslider(item), delay);
		}
	}
	aboutRevealed = true;
	console.log("ok_4");
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



