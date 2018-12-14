import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./component/Form/Form";
import Dash from "./component/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={Dash} />
    <Route path="/form" component={Form} />
    {/* <Route path="/classlist/:class" component={ClassList} />
    <Route path="/student/:id" component={Student} /> */}
  </Switch>
);
