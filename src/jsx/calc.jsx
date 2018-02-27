import React from 'react';
import ReactDOM from 'react-dom';
import 'rc-calendar/assets/index.css';
import Picker from 'rc-calendar/lib/Picker';
import ruRU from 'rc-calendar/lib/locale/ru_RU';
import {RangeCalendar, myTestVar} from 'rc-calendar/lib/RangeCalendar';
import RangeCounter from '../../dist/js/rc-calendar/RangeCounter';

function myPrinter(arr) {
	arr.forEach(function(item, i, arr) {
		//alert( i + ": " + item + " (массив:" + arr + ")" );
		//console.log([i + 1] + `. ${item} = ` + item + " ;  its type - " + typeof item);
		alert("myPrinter is online");
		if ( i === arr.length ) {
			console.log("--------------   end of method passing   --------------");
		}
	});
}

class Calc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nikValue: "initial value"
		};
		this.getNikValue = this.getNikValue.bind(this);
	}

	getNikValue(input) {
		this.setState( { nikValue: input } );
	}

	render() {
		return (
			<div>
				<h2>This is Calculator page</h2>
				<RangeCalendar 	locale={ruRU}
								onChange = { value => console.log(value) }
								//<!--	onSelect = {this.getNikValue} -->
				/>
				<RangeCounter nVal="this.state.nikValue" />
				<p>My Range must be here: {this.state.nikValue}</p>
			</div>
		);
	}
}

console.log("myTestVar = " + myTestVar);

export default Calc;
export {myPrinter};
