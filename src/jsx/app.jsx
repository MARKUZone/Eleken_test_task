import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import About from './about';
import Calc from './calc';
import Contacts from './contacts';

const history = createBrowserHistory();

/*const About = () => (
	<div>
		<h2>This is About page</h2>
	</div>
)

const Calc = () => (
	<div>
		<h2>Calculator</h2>
		<Calendar />
	</div>
)

const Contacts = () => (
	<div>
		<h2>Contacts</h2>
	</div>
)*/


class Navigation extends React.Component{
	render(){
		return(
			<BrowserRouter history={history}>
				<div>
					<ul className="menu">
						<li><Link to="/about">About</Link></li>
						<li><Link to="/calc">Calculator</Link></li>
						<li><Link to="/contacts">Contacts</Link></li>
					</ul>

					<Route exact path="/about" component={About} />
					<Route path="/calc" component={Calc} />
					<Route path="/contacts" component={Contacts} />
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<Navigation />, document.getElementById('root'));
