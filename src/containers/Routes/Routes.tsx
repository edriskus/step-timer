import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Timer from "../Timer/Timer";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/timer/:id" component={Timer} exact={true} />
    </Switch>
  );
}
