import React from "react";
import "../public/index.css";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MaMap from "./components/MaMap";
import NotFound from "./components//NotFound";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/weather" component={MaMap} />
      <Route exact path="/" component={MaMap} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("app")
);
