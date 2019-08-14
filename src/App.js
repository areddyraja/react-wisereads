import React from "react";
import "./App.css";
import Home from "./app/components/home/Home";
import Login from "./app/components/login/Login";
import Register from "./app/components/register/Register";
import DashBoard from "../src/app/components/dashboard/dashboard";
import Book from "../src/app/components/book/Book";
/* import AppRouting from "./AppRouting"; */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} exact />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/book" component={Book} />
      </div>
    </Router>
  );
}

export default App;
