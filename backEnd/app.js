const mysql = require("mysql");
const express = require("express");
var cors = require("cors");
const bodyparser = require("body-parser");

require("dotenv").config();

var app = express();
app.use(cors());

// Use  body parser as middle ware
app.use(bodyparser.urlencoded({ extended: true }));

// Connecting to REMOTE DB

var mysqlConnection = mysql.createPool({
	user: "b2a598129d7190",
	password: process.env.PASSWORD,
	host: process.env.HOST,
	database: process.env.DATABASE,
});

mysqlConnection.getConnection((err) => {
	if (err) console.log(err);
	else console.log("Connected");
});

//Incase Error happens

mysqlConnection.on("error", function (err) {
	console.log("caught this error: " + err.toString());
});

//Install: Create the tables necessary
app.get("/install", (req, res) => {
	let message = "Tables Created";
	let createProducts = `CREATE TABLE if not exists Products(
      product_id int auto_increment,
      product_url varchar(255) not null,
      product_name varchar(255) not null,
      PRIMARY KEY (product_id)
  )`;
	let createProductDescription = `CREATE TABLE if not exists ProductDescription(
    description_id int auto_increment,
    product_id int(11) not null,
    product_brief_description TEXT not null,
    product_description TEXT not null,
    product_img varchar(255) not null,
    product_link varchar(255) not null,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
	let createProductPrice = `CREATE TABLE if not exists ProductPrice(
    price_id int auto_increment,
    product_id int(11) not null,    
    starting_price varchar(255) not null,
    price_range varchar(255) not null,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;
	mysqlConnection.query(createProducts, (err, results, fields) => {
		if (err) console.log(err);
	});
	mysqlConnection.query(createProductDescription, (err, results, fields) => {
		if (err) console.log(err);
	});
	mysqlConnection.query(createProductPrice, (err, results, fields) => {
		if (err) console.log(err);
	});

	res.end(message);
});

// Insert a new iPhone
app.post("/addiphones", (req, res) => {
	// console.log(bodyparser.json);
	console.log(req.body.iphoneId);
	let Id = req.body.iphoneId;
	let img = req.body.imgPath;
	let Url = req.body.iphoneLink;
	let Title = req.body.iphoneTitle;
	let Brief = req.body.briefDescription;
	let StartPrice = req.body.StartPrice;
	let PriceRange = req.body.priceRange;
	let Description = req.body.fullDescription;

	// To use it as a foreign key
	let addedProductId = 0;

	let sqlAddToProducts =
		"INSERT INTO Products (product_url, product_name) VALUES ('" +
		Id +
		"', '" +
		Title +
		"' )";

	mysqlConnection.query(sqlAddToProducts, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	});

	mysqlConnection.query(
		"SELECT * FROM Products WHERE product_url = '" + Id + "' ",
		(err, rows, fields) => {
			addedProductId = rows[0].product_id;
			console.log(addedProductId);
			if (err) console.log(err);

			if (addedProductId != 0) {
				let sqlAddToProductDescription =
					"INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('" +
					addedProductId +
					"', '" +
					Brief +
					"', '" +
					Description +
					"', '" +
					img +
					"', '" +
					Url +
					"' )";

				let sqlAddToProductPrice =
					"INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('" +
					addedProductId +
					"', '" +
					StartPrice +
					"', '" +
					PriceRange +
					"')";

				mysqlConnection.query(
					sqlAddToProductDescription,
					function (err, result) {
						if (err) throw err;
						console.log("Product description inserted");
					}
				);

				mysqlConnection.query(sqlAddToProductPrice, function (err, result) {
					if (err) throw err;
					console.log("Product price inserted");
				});
			}
		}
	);
	res.end("Product added");
});

//Get all iphones
app.get("/iphones", (req, res) => {
	mysqlConnection.query(
		"SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
		(err, rows, fields) => {
			let iphones = { products: [] };
			iphones.products = rows;
			var stringIphones = JSON.stringify(iphones);
			if (!err) res.end(stringIphones);
			else console.log(err);
		}
	);
});

// const port = 3001; for LOCAL
const port = process.env.PORT; //for REMOTE
app.listen(port, () =>
	console.log(
		"Listening to : " + port,
		`\nRunning on => http://localhost:${port}`
	)
);
