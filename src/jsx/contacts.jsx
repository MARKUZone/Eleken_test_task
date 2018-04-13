class Contacts extends React.Component {

	componentWillMount() {
		delayedDnone("contacts");
	}

	componentDidMount() {
		slideRevealer("contacts");
		shadowOnHover();
		aboutInteraction();
	}

	render() {
		return (
			<div className="contacts-comp dnone away-aim">
				<section className="contacts xslider-container">
					<div className="container">
						<div className="row m0">
							<div className="col">
								<h2 className="xslider xslider1">Contacts</h2>
								<ul>
									<li className="xslider xslider2">
										<div className="row shadow-aim">
											<div className="col dflex">
												<div className="icon-holder">
													<i className="fab fa-facebook-f"></i>
												</div>
												<h4>Phone</h4>
											</div>
											<div className="col-12 col-sm dflex">
												<button type="submit" className="dflex">
													<a href="tel:+38-095-344-94-16" className="dflex" target="_blank" >Call me</a>
												</button>
											</div>
										</div>
									</li>
									<li className="xslider xslider3">
										<div className="row shadow-aim">
											<div className="col dflex">
												<div className="icon-holder">
													<i className="fab fa-facebook-f"></i>
												</div>
												<h4>Email</h4>
											</div>
											<div className="col-12 col-sm dflex">
												<button type="submit" className="dflex">
													<a href="mailto:2545442@gmail.com" className="dflex" target="_blank" >Write me</a>
												</button>
											</div>
										</div>
									</li>
									<li className="xslider xslider4">
										<div className="row shadow-aim">
											<div className="col dflex">
												<div className="icon-holder">
													<i className="fab fa-facebook-f"></i>
												</div>
												<h4>djinni.co profile</h4>
											</div>
											<div className="col-12 col-sm dflex">
												<button type="submit" className="dflex">
													<a href="https://djinni.co/" className="dflex" target="_blank" >Visit page</a>
												</button>
											</div>
										</div>
									</li>
									<li className="xslider xslider5">
										<div className="row shadow-aim">
											<div className="col dflex">
												<div className="icon-holder">
													<i className="fab fa-facebook-f"></i>
												</div>
												<h4>GitHub profile</h4>
											</div>
											<div className="col-12 col-sm dflex">
												<button type="submit" className="dflex">
													<a href="https://github.com/MARKUZone" className="dflex" target="_blank" >Visit page</a>
												</button>
											</div>
										</div>
									</li>
									<li className="xslider xslider6">
										<div className="row shadow-aim">
											<div className="col dflex">
												<div className="icon-holder">
													<i className="fab fa-facebook-f"></i>
												</div>
												<h4>PDF CVs</h4>
											</div>
											<div className="col-12 col-sm-3 dflex">
												<button type="submit" className="dflex">
													<a href="https://goo.gl/5oNMnW" className="dflex" target="_blank" >English</a>
												</button>
											</div>
											<div className="col-12 col-sm-3 dflex">
												<button type="submit" className="dflex">
													<a href="https://goo.gl/ccGs16" className="dflex" target="_blank" >Russian</a>
												</button>
											</div>
											<div className="col-12 col-sm-3 dflex">
												<button type="submit" className="dflex">
													<a href="https://goo.gl/" className="dflex" target="_blank" >Ukrainian</a>
												</button>
											</div>
										</div>
									</li>
									<li className="xslider xslider7">
										<div className="row shadow-aim">
											<div className="col dflex">
												<div className="icon-holder">
													<i className="fab fa-facebook-f"></i>
												</div>
												<h4>My other works</h4>
											</div>
											<div className="col-12 col-sm-3 dflex">
												<button type="submit" className="dflex">
													<a href="https://markuzone.github.io/React_calculator/" className="dflex" target="_blank" >React Calculator</a>
												</button>
											</div>
											<div className="col-12 col-sm-3 dflex">
												<button type="submit" className="dflex">
													<a href="https://markuzone.github.io/" className="dflex" target="_blank" >Adaptive Watchshop website</a>
												</button>
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


export default Contacts;
