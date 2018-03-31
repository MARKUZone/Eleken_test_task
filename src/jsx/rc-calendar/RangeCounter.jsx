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
		//this.daysCounter = this.daysCounter.bind(this);
	}

	/*shouldComponentUpdate(nextProps, nextState) {
		let day1 = this.props.date1;
		let day2 = this.props.date2;
		if (day2 != nextProps.date2 ) {
			let delta = ((Math.abs( day1 - day2 )) / ( 1000*3600*24 )) ;
			delta = Math.floor(delta) + 1 ;
			this.setState({daysRange: delta});
			console.log(delta);
		}
		let delta = ((Math.abs( day1 - day2 )) / ( 1000*3600*24 )) ;
		delta = Math.floor(delta) + 1 ;
		this.setState({daysRange: delta});
		console.log(delta);
	}*/
	
	/*componentWillUpdate() {
		let day1 = this.props.date1;
		let day2 = this.props.date2;
		if ( !isNaN( day2 ) ) {
			let delta = ((Math.abs( day1 - day2 )) / ( 1000*3600*24 )) ;
			delta = Math.floor(delta) + 1 ;
			//this.setState({daysRange: delta});
			console.log(delta);
		};
	}*/

	render() {
		let delta = null;
		let day1 = this.props.date1;
		let day2 = this.props.date2;
		if ( typeof(day2) !== "string" ) {
			delta = Math.abs( day1 - day2 ) / ( 1000*3600*24 ) ;
			delta = Math.floor(delta) + 1 ;
			//console.log(delta);
		}
		//console.log(day2, typeof(day2));
		return (
			<div className="range-counter dflex">
			    {/*<p>This is date1: {this.props.date1}.</p>
			    <p>This is date2: {this.props.date2}.</p>*/}
			    <Conclusion daysRange={delta} />
		    </div>
		)
	}
}

export default RangeCounter;
