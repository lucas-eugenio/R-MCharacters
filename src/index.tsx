import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { GraphQLProvider, GraphQLClient } from "./utils/useGraphQL";
import Header from "./components/header/header.component";
import Body from "./components/body/body.component";

ReactDOM.render(
  <React.StrictMode>
    <GraphQLProvider client={GraphQLClient}>
      <Header />
      <Body />
    </GraphQLProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
