import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import {getUser} from './auth'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
	request: (operation) => {
		if(operation.operationName === "Login"){
			
		}else{
			const {token} = getUser()
			operation.setContext({
				headers: {
					authorization: token ? `Bearer ${token}` : "",
				},
			});
		}
	},
	uri: "https://tryroundtable.herokuapp.com/",
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
