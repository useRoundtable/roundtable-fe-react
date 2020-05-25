import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home/Home.jsx";
import { TestPage } from "./roundtable/roundtable";
import { NavBar } from "./navigation/NavBar";
import { Roundtables } from "./animation/roundtableAni.jsx";

import "./App.css";

function App() {
	// Define the function here
	return (
		<Router>
			{/* <NavBar /> */}
			<Route exact path="/" component={Home} />
			<Route path="/rtanimation" component={Roundtables} />
			<Route path="/testpage" component={TestPage} />
		</Router>
	);
}

export default App;
