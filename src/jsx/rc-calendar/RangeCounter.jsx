import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';


function Conclusion(props) {
	if ( props.daysRange === 1 ) {
		return <p>Day range is: 1 day.</p>;
	} else if ( props.daysRange > 1 ) {
		return <p>Day range is: {props.daysRange} days.</p>;
	} else {
		return <p>Select dates to count date range.</p>;
	}
}

class RangeCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			daysRange: 0
		};
		this.daysCounter = this.daysCounter.bind(this);
	}

	daysCounter() {
		let day1 = this.props.date1;
		let day2 = this.props.date2;
		if ( !isNaN( day2 ) ) {
			let delta = ((Math.abs( day1 - day2 )) / ( 1000*3600*24 )) ;
			delta = Math.floor(delta) + 1 ;
			this.setState({daysRange: delta});
			console.log(delta);
		};
	}

	render() {
		return (
			<div className="range-counter">
			    <p>This is date1: {this.props.date1}.</p>
			    <p>This is date2: {this.props.date2}.</p>
			    <button onClick={this.daysCounter} > button </button>
			    <Conclusion daysRange={this.state.daysRange} />
		    </div>
		)
	}
}

export default RangeCounter;
