import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./bootstrap.css";
import "./Style.css";

// Home page
import Nav from "./Components/Nav/Nav";
import Paragraph from "./Components/Paragraph/Paragraph";
import First from "./Components/First/First";
import Second from "./Components/Second/Second";
import Third from "./Components/Third/Third";
import Fourth from "./Components/Fourth/Fourth";
import Fifth from "./Components/Fifth/Fifth";
import Sixth from "./Components/Sixth/Sixth";
import Youtube from "./Components/Youtube/Youtube";
import Footer from "./Components/Footer/Footer";

// Pages
import Iphone from "./Components/Pages/Iphone/iphone";
import Mac from "./Components/Pages/Mac/Mac";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Music from "./Components/Pages/Music/Music";
import Cart from "./Components/Pages/Cart/Cart";
import Support from "./Components/Pages/Support/Support";
import TV from "./Components/Pages/TV/TV";
import Watch from "./Components/Pages/Watch/Watch";
import Four04 from "./Components/Pages/Four04/Four04";
import Productpage from "./Components/Pages/Productpage/Productpage";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Route path="/" exact component={Paragraph} />
				<Route path="/" exact component={First} />
				<Route path="/" exact component={Second} />
				<Route path="/" exact component={Third} />
				<Route path="/" exact component={Fourth} />
				<Route path="/" exact component={Fifth} />
				<Route path="/" exact component={Sixth} />
				<Switch>
					<Route path="/" exact component={Youtube} />
					<Route path="/iphone" exact component={Iphone} />
					<Route path="/ipad" exact component={Ipad} />
					<Route path="/TV" exact component={TV} />
					<Route path="/Watch" exact component={Watch} />
					<Route path="/Music" exact component={Music} />
					<Route path="/Support" exact component={Support} />
					<Route path="/Cart" exact component={Cart} />
					<Route path="/mac" exact component={Mac} />
					<Route path="/iphone/:pid" exact component={Productpage} />
					<Route path="/" component={Four04} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
