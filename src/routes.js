import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Orders from "./Pages/Orders";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Orders" component={Orders} />
      </Switch>
    </Router>
  );
}

export default Routes;
