import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { getUser } from "./auth";

// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	HttpLink,
	ApolloLink,
	concat,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "https://tryroundtable.herokuapp.com" });

const authMiddleWare = new ApolloLink((operation, forward) => {
	const { token } = getUser();
	operation.setContext({
		headers: {
			authorization: token ? `Bearer ${token}` : "",
		},
	});
	return forward(operation);
});

const client = new ApolloClient({
	// uri: "localhost:4000",
	cache: new InMemoryCache(),
	link: concat(authMiddleWare, httpLink),
	credentials: "include",
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
