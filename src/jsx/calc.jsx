import 'rc-calendar/assets/index.css';
import Picker from 'rc-calendar/lib/Picker';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import ruRU from 'rc-calendar/lib/locale/ru_RU';
import React from 'react';
import ReactDOM from 'react-dom';
import RangeCounter from '../../dist/js/rc-calendar/RangeCounter';


const Calc = () => (
	<div>
		<h2>This is Calculator page</h2>
		<RangeCalendar locale={ruRU} onChange = {(value) => {console.log(value)}} />
		<RangeCounter />
	</div>
)


export default Calc;
