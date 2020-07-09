import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home/Home.jsx";
import { NavBar } from "./navigation/NavBar";
import { Dashboard } from "./dashboard/Dashboard";
import { RTAnimation } from "./animation/roundtableAni.jsx";
import { Roundtable } from "./roundtable/roundtable.jsx";
import { Login } from "./login/Login";
import { NewRoundtable } from "./createRoundtable/newRoundtable/NewRoundtable";

import "./App.css";

function App() {
	// Define the function here
	// This if else chain is taking the URL after the initial / and rendering the desired components.
	if (window.location.pathname === "/") {
		return (
			<Router>
				<Route exact path="/" component={Home} />
			</Router>
		);
	} else {
		return (
			<Router>
				<NavBar />
				<Route path="/rtanimation" component={RTAnimation} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/roundtable/:roundtableId" component={Roundtable} />
				<Route path="/login" component={Login} />
				<Route path="/new" component={NewRoundtable} />
			</Router>
		);
	}
}

export default App;
