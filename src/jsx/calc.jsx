import React from 'react';
import ReactDOM from 'react-dom';
import 'rc-calendar/assets/index.css';
import Picker from 'rc-calendar/lib/Picker';
import ruRU from 'rc-calendar/lib/locale/ru_RU';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RangeCounter from '../../dist/js/rc-calendar/RangeCounter';
//import myPrinter from '../../dist/js/myPrinter';


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
			this.setState( { date1: input[0].valueOf() } );
			this.setState( { date2: input[1].valueOf() } );
		}
	}

	componentWillMount() {
		delayedDnone("calc");
	}

	componentDidMount() {
		slideRevealer("calc");
		shadowOnHover();
		aboutInteraction();
	}

	render() {
		return (
			<div>
				<div className="calc-comp dnone away-aim">
					<section className="calc xslider-container">
						<div className="container">
							<div className="row">
								<div className="col">
									<h2 className="xslider xslider1" >Calendar Day Range Counter</h2>
									<div className="calendar-block dflex xslider xslider2">
										<RangeCalendar
											locale={ruRU}
											onChange = { value => this.getRange(value) }
										/>
									</div>
									<div className="range-block xslider xslider3">
										<RangeCounter 
											date1={this.state.date1} 
											date2={this.state.date2} 
										/>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				{/*<h2>This is Calculator page</h2>
				<RangeCalendar
					locale={ruRU}
					onChange = { value => this.getRange(value) }
				/>
				<RangeCounter 
					date1={this.state.date1} 
					date2={this.state.date2} 
				/>*/}
			</div>
		);
	}
}


export default Calc;
