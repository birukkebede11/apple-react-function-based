import { useEffect, useState } from "react";

function Productpage(props) {
	const [products, setProducts] = useState([]);
	const [productID, setProductID] = useState(props.match.params.pid);

	useEffect(() => {
		fetch("/iphones.json")
			.then((res) => res.json())
			.then((products) => {
				const productList = products.products;
				const singleProduct = productList.filter(
					(product) => product.Id === productID
				);
				setProducts(singleProduct);
			})
			.catch(() => console.log("Error: unable to fetch!!"));
	}, [productID]);
	return (
		<div>
			<section className="internal-page-wrapper">
				<div className="container">
					{products.map((product) => {
						let id = product.Id;
						let title = product.Title;
						let img = product.img;
						let Brief = product.Brief;
						let StartPrice = product.StartPrice;
						let PriceRange = product.PriceRange;
						let productPage = "/iphone/" + id;
						let details = product.Description;

						let productDiv = (
							<div key={id}>
								<div className="row justify-content-center text-center">
									<div className="col-12">
										<div className="title-wraper">{title}</div>
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
}

export default Productpage;
