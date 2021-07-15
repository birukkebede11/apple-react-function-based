import Rating from "./Rating/Rating";

function Second() {
	return (
		<div>
			<section className="Macbook">
				<div className="container">
					<div className="new-alert">New</div>

					<div className="title-wraper bold black">MacBook Air</div>

					<div className="description-wrapper black">
						Twice the speed. Twice the storage.
					</div>

					<div className="price-wrapper grey">From $999.</div>

					<div className="links-wrapper">
						<ul>
							<li>
								<a href="/">Learn more</a>
							</li>
							<li>
								<a href="/">Buy</a>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<Rating />
		</div>
	);
}

export default Second;
