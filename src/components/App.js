import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home/Home.jsx";
import { NavBar } from "./navigation/NavBar";
import { Dashboard } from "./dashboard/Dashboard";
import { Roundtables } from "./animation/roundtableAni.jsx";
import { Roundtable } from "./roundtable/Roundtable.jsx";

import "./App.css";

function App() {
	// Define the function here
	return (
		<Router>
			{/* <NavBar /> */}
			<Route exact path="/" component={Home} />
			<Route path="/rtanimation" component={Roundtables} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/roundtable" component={Roundtable} />
		</Router>
	);
}

export default App;
