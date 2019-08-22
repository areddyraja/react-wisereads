import React from "react";
import "./App.css";
import Home from "./app/components/home/Home";
import Login from "./app/components/login/Login";
import Register from "./app/components/register/Register";
import DashBoard from "../src/app/components/dashboard/dashboard";
import Book from "../src/app/components/book/Book";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BooksContextProvider from "./app/contexts/BooksContext";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Books context is for set the selected book details and use it other child components
         */}
        <BooksContextProvider>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/book-details/:id" component={Book} />
        </BooksContextProvider>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} exact />
        <Route path="/dashboard" component={DashBoard} />
      </div>
    </Router>
  );
}

export default App;
