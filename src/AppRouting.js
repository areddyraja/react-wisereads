import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/jsx/Home";
import Login from "./components/jsx/Login";

export default () => {
  <div>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} exact />
  </div>;
};
