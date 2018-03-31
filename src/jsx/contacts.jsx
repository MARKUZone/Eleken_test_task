class Contacts extends React.Component {
	
	componentDidMount() {
		slideRevealer("contacts");
		shadowOnHover();
		aboutInteraction();
	}

	render() {
		return (
			<div className="Contacts-comp">
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
												<h4>Facebook</h4>
											</div>
											<div className="col-12 col-sm dflex">
												<button type="submit" className="dflex">
													<a href="#" className="dflex" >visit page</a>
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
												<h4>Facebook</h4>
											</div>
											<div className="col-12 col-sm dflex">
												<button type="submit" className="dflex">
													<a href="#" className="dflex" >visit page</a>
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
												<h4>Facebook</h4>
											</div>
											<div className="col-12 col-sm dflex">
												<button type="submit" className="dflex">
													<a href="#" className="dflex" >visit page</a>
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
