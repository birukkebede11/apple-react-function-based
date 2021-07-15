import NavbarList from "./NavbarList/NavbarList";
import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";
import { useEffect } from "react";
import $ from "jquery";

function Nav() {
	useEffect(() => {
		$(".search-link").click(function (event) {
			event.preventDefault();
			$(".navbar-collapse.collapse").removeClass("show");
			$(".searchbox").slideToggle();
		});
	}, []);

	return (
		<div>
			<div className="nav-tool fixed-top">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target=".navbar-collapse">
							☰
						</button>
						<a className="navbar-brand mx-auto" href="/">
							<img src={logo} alt="Apple logo" />
						</a>

						<div className="navbar-collapse collapse">
							<ul className="navbar-nav nav-justified w-100 nav-fill">
								<NavbarList LinkUrl="/mac/" LinkName="Mac" />
								<NavbarList LinkUrl="/iphone/" LinkName="iphone" />
								<NavbarList LinkUrl="/ipad/" LinkName="ipad" />
								<NavbarList LinkUrl="/watch/" LinkName="watch" />
								<NavbarList LinkUrl="/tv/" LinkName="tv" />
								<NavbarList LinkUrl="/Music/" LinkName="Music" />
								<NavbarList LinkUrl="/Support/" LinkName="Support" />
								<li className="nav-item">
									<a
										className="search-link nav-link js-scroll-trigger"
										href="/search/">
										<img src={search} alt="Search logo" />
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link js-scroll-trigger logo-link"
										href="/cart/">
										<img src={cart} alt="Cart logo" />
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>

			<section className="searchbox">
				<form>
					<input type="text" name="searchbox" />
					<button id="submitButton" className="btn btn-primary" type="submit">
						Search
					</button>
				</form>
			</section>
		</div>
	);
}

export default Nav;
