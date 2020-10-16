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
let httpLink = ""
if(process.env.REACT_APP_DEVELOPMENT_DB){
	httpLink = new HttpLink({ uri: process.env.REACT_APP_DEVELOPMENT_DB });
}else {
	httpLink = new HttpLink({ uri: process.env.REACT_APP_DATABASE_URL });
}

const authMiddleWare = new ApolloLink((operation, forward) => {
	if (getUser()) {
		if (operation.operationName === "Login") {
		} else {
			const { token } = getUser();
			operation.setContext({
				headers: {
					authorization: token ? `Bearer ${token}` : "",
				},
			});
		}
		return forward(operation);
	}
	forward();
});

const client = new ApolloClient({
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
