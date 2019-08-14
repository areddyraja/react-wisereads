import React, { Component } from "react";
import "../../../assets/css/book.css";

class Book extends Component {
  render() {
    const textColor = {
      color: "black"
    };
    return <h1 style={textColor}>Welcome</h1>;
  }
}

export default Book;
