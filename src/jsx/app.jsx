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
				<div className="app-begin">
					
					
					<header>
						<div className="home">
							<input type="button" />
						</div>
						<nav className="navbar navbar-expand-sm navbar-dark bg-light">
							<a className="navbar-brand" title="Eleken test task" href="#"><img width="32" alt="React" src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"/>Navbar</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>

							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item">
										<Link to="/about" className="nav-link">About</Link>
									</li>
									<li className="nav-item">
										<Link to="/calc" className="nav-link">Calendar</Link>
									</li>
									<li className="nav-item">
										<Link to="/contacts" className="nav-link">Contacts</Link>
									</li>
								</ul>
							</div>
						</nav>
					</header>


					{/*<ul className="menu">
						<li><Link to="/about">About</Link></li>
						<li><Link to="/calc">Calculator</Link></li>
						<li><Link to="/contacts">Contacts</Link></li>
					</ul>*/}

					<Route exact path="/about" component={About} />
					<Route path="/calc" component={Calc} />
					<Route path="/contacts" component={Contacts} />
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<Navigation />, document.getElementById('root'));
