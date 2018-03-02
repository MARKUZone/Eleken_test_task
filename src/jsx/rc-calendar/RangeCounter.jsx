import React from 'react';
import createReactClass from 'create-react-class';


class RangeCounter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="range-counter">
		      <p>This is date1: {this.props.date1}.</p>
		      <p>This is date2: {this.props.date2}.</p>
		    </div>
		)
	}
}

export default RangeCounter;
