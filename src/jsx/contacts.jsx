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
												<div className="icon-holder dflex">
													<i class="fas fa-mobile-alt"></i>
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
												<div className="icon-holder dflex">
													<i class="fas fa-at"></i>
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
												<div className="icon-holder dflex">
													<img src="https://markuzone.github.io/Eleken_test_task/ref/Djinni_Logo.svg" alt="" ></img>
												</div>
												<h4>djinni.co profile</h4>
											</div>
											<div className="col-12 col-sm dflex">
												<button type="submit" className="dflex">
													<a href="https://djinni.co/q/1c496021/" className="dflex" target="_blank" >Visit page</a>
												</button>
											</div>
										</div>
									</li>
									<li className="xslider xslider5">
										<div className="row shadow-aim">
											<div className="col dflex">
												<div className="icon-holder dflex">
													<i class="fab fa-github"></i>
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
											<div className="col-12 col-sm-6 dflex">
												<div className="icon-holder dflex">
													<i class="far fa-file-pdf"></i>
												</div>
												<h4>PDF CVs</h4>
											</div>
											<div className="col-12 col-sm-6 dflex">
												<div className="row" >
													<div className="col-12 col-lg-6 dflex">
														<button type="submit" className="dflex">
															<a href="https://goo.gl/RZL54X" className="dflex" target="_blank" >English</a>
														</button>
													</div>
													<div className="col-12 col-lg-6 dflex">
														<button type="submit" className="dflex">
															<a href="https://goo.gl/ZfCvwy" className="dflex" target="_blank" >Russian</a>
														</button>
													</div>
													{/*<div className="col-12 col-lg-4 dflex">
														<button type="submit" className="dflex">
															<a href="https://goo.gl/aAZbsM" className="dflex" target="_blank" >Ukrainian</a>
														</button>
													</div>*/}
												</div>
											</div>
										</div>
									</li>
									<li className="xslider xslider7">
										<div className="row shadow-aim">
											<div className="col-12 col-sm-6 dflex">
												<div className="icon-holder dflex">
													<i class="fas fa-code"></i>
												</div>
												<h4>My other works</h4>
											</div>
											<div className="col-12 col-sm-6 dflex">
												<div className="row" >
													<div className="col-12 col-lg-6 dflex">
														<button type="submit" className="dflex">
															<a href="https://markuzone.github.io/React_calculator/" className="dflex" target="_blank" >React Calculator</a>
														</button>
													</div>
													<div className="col-12 col-lg-6 dflex">
														<button type="submit" className="dflex">
															<a href="https://markuzone.github.io/" className="dflex" target="_blank" >Adaptive Watchshop website</a>
														</button>
													</div>
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


export default Contacts;
