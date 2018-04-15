class About extends React.Component {

	componentWillMount() {
		delayedDnone("about");
	}

	componentDidMount() {
		slideRevealer("about");
		shadowOnHover();
		aboutInteraction();
	}

	render() {
		return (
			<div className="about-comp dnone away-aim">
				<section className="about xslider-container">
					<div className="container">
						<div className="row m0">
							<div className="col">
								<h2 className="xslider xslider1">Calendar date range finder app</h2>
								<ul>
									<li className="xslider xslider2">
										<div className="row shadow-aim click-field">
											<div className="col-1 dflex">
												<i class="fas fa-info"></i>
											</div>
											<div className="col">
												<a href="#" className="dflex">
													<h4>How to use App</h4>
													<i className="fas fa-angle-down"></i>
												</a>
												<div className="hide-block">
													<p><b>1</b> Click on Calendar menu item (or menu button if navbar is collapsed)</p>
													<p><b>2</b> Click on first day of interested day range and than click on the second one</p>
													<p><b>3</b> Under Calendar you will see day range counter which shows current number of days in selected range</p>
												</div>
											</div>
										</div>
									</li>
									<li className="xslider xslider3">
										<div className="row shadow-aim click-field">
											<div className="col-1 dflex">
												<i class="fas fa-terminal"></i>
											</div>
											<div className="col">
												<a href="#" className="dflex">
													<h4>How to install App</h4>
													<i className="fas fa-angle-down"></i>
												</a>
												<div className="hide-block">
													<p><b>1</b> <i><u>git clone</u></i> this <a href="https://github.com/MARKUZone/Eleken_test_task">repo</a></p>
													<p><b>2</b> Install App with <i><u>npm i</u></i></p>
													<p><b>3</b> Start local server by executing in cmd <i><u>npm run server</u></i></p>
													<p><b>4</b> Open <i><u>localhost:3000</u></i></p>
												</div>
											</div>
										</div>
									</li>
									<li className="xslider xslider4">
										<div className="row shadow-aim click-field">
											<div className="col-1 dflex">
												<i className="fas fa-clipboard-list"></i>
											</div>
											<div className="col">
												<a href="#" className="dflex">
													<h4>Technologies used in this App</h4>
													<i className="fas fa-angle-down"></i>
												</a>
												<div className="hide-block">
													<p><b>1</b> JS, React, React Router</p>
													<p><b>2</b> git, gulp, webpack, npm</p>
													<p><b>3</b> SASS, jQuery, bootstrap 4</p>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
	

export default About;
