import React from 'react';
import ReactDOM from 'react-dom';
import 'rc-calendar/assets/index.css';
import Picker from 'rc-calendar/lib/Picker';
import ruRU from 'rc-calendar/lib/locale/ru_RU';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RangeCounter from '../../dist/js/rc-calendar/RangeCounter';


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
		//console.log( input[0]._d.toString() , typeof(input[0]._d.toString()) );
		this.setState( { date1: input[0]._d.toString() } );
		this.setState( { date2: input[1]._d.toString() } );
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
					onChange={ () => onChanges }
				/>
				{/*<p>Calc this.state.date1: {this.state.date1}</p>
				<p>Calc this.state.date2: {this.state.date2}</p>*/}
			</div>
		);
	}
}


export default Calc;
