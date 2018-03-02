import React from 'react';
import ReactDOM from 'react-dom';
import 'rc-calendar/assets/index.css';
import Picker from 'rc-calendar/lib/Picker';
import ruRU from 'rc-calendar/lib/locale/ru_RU';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RangeCounter from '../../dist/js/rc-calendar/RangeCounter';
import myPrinter from '../../dist/js/myPrinter';


class Calc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date1: "",
			date2: ""
		};
		this.getRange = this.getRange.bind(this);
	}

	getRange(input) {
		if ( Object.keys(input).length === 2 ) {
			this.setState( { date1: input[0]._d.toString() } );
			this.setState( { date2: input[1]._d.toString() } );
			const item1 = input[0]._d.toString().split(" ").slice(1, 4);
			myPrinter({
				//"Object.keys(input).length": Object.keys(input).length, // trigger
				"item1": item1,
				"item1[0]": item1[0]
			});
			console.log(item1, typeof(item1));
			console.log(item1[0], typeof(item1[0]));
		}
	}

	render() {
		return (
			<div>
				<h2>This is Calculator page</h2>
				<RangeCalendar
					locale={ruRU}
					onChange = { value => this.getRange(value) }
				/>
				<RangeCounter 
					date1={this.state.date1} 
					date2={this.state.date2} 
				/>
			</div>
		);
	}
}


export default Calc;
