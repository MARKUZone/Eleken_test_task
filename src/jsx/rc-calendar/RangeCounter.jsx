import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';


function Conclusion(props) {
	if ( props.daysRange === 1 ) {
		return <p>Day range is: <span className="counter-placeholder" >1</span> day.</p>;
	} else if ( props.daysRange > 1 ) {
		return <p>Day range is: <span className="counter-placeholder" >{props.daysRange}</span> days.</p>;
	} else {
		return <p>Select dates to count date range.</p>;
	}
}

class RangeCounter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let delta = null;
		let day1 = this.props.date1;
		let day2 = this.props.date2;
		if ( typeof(day2) !== "string" ) {
			delta = Math.abs( day1 - day2 ) / ( 1000*3600*24 ) ;
			delta = Math.floor(delta) + 1 ;
		}
		return (
			<div className="range-counter dflex">
				<Conclusion daysRange={delta} />
		    </div>
		)
	}
}

export default RangeCounter;
