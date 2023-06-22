import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import { Helmet } from "react-helmet";
import MySorobanReactProvider from "./components/MySorbeanProvider";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <ApolloProvider client={client}>
    <MySorobanReactProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/1.5.1/index.min.js"></script>
      </Helmet>

      <App />
    </MySorobanReactProvider>
  </ApolloProvider>

);


