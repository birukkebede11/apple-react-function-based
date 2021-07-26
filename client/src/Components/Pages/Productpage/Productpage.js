import { useEffect, useState } from "react";
import Four04 from "../Four04/Four04";

function Productpage(props) {
	const [products, setProducts] = useState([]);
	const [productID, setProductID] = useState(props.match.params.pid);
	useEffect(() => {
		fetch("http://localhost:3001/iphones")
			.then((res) => res.json())
			.then((products) => {
				const productList = products.products;
				const singleProduct = productList.filter(
					(product) => product.product_url === productID
				);
				setProducts(singleProduct);
			})
			.catch(() => console.log("Error: unable to fetch!!"));
	}, [productID]);

	if (products.length) {
		return (
			<div>
				<section className="internal-page-wrapper">
					<div className="container">
						{products.map((product) => {
							let id = product.product_id;
							let title = product.product_name;
							let img = product.product_img;
							let Brief = product.product_brief_description;
							let StartPrice = product.starting_price;
							let PriceRange = product.price_range;
							let productPage = "/iphone/" + id;
							let details = product.product_description;

							let productDiv = (
								<div key={id}>
									<div className="row justify-content-center text-center">
										<div className="col-12 mt-5">
											<div className="title-wraper font-weight-bold">
												{title}
											</div>
											<div className="brief-description">{Brief}</div>
										</div>
									</div>

									<div className="row justify-content-center text-center product-holder h-100">
										<div className={`col-sm-12 col-md-6 my-auto`}>
											<div className="starting-price">
												{`Starting at ${StartPrice}`}
											</div>
											<div className="monthly-price">{PriceRange}</div>
											<div className="product-details">{details}</div>
										</div>

										<div className={`col-sm-12 col-md-6`}>
											<div className="prodict-image">
												<img src={img} alt="product" />
											</div>
										</div>
									</div>
								</div>
							);
							return productDiv;
						})}
					</div>
				</section>
			</div>
		);
	} else {
		return <Four04 />;
	}
}

export default Productpage;
