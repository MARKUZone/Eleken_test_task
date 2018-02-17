import 'rc-calendar/assets/index.css';
import Picker from 'rc-calendar/lib/Picker';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import ruRU from 'rc-calendar/lib/locale/ru_RU';
import React from 'react';
import ReactDOM from 'react-dom';


const Calc = () => (
	<div>
		<h2>This is Calculator page</h2>
		<RangeCalendar locale={ruRU} />
	</div>
)


export default Calc;
