import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { GraphQLProvider, GraphQLClient } from "./utils/useGraphQL";
import Router from "./components/router/router.component";

ReactDOM.render(
  <React.StrictMode>
    <GraphQLProvider client={GraphQLClient}>
      <Router />
    </GraphQLProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
