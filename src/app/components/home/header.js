import React from "react";
import wisereadsLogo from "../../../assets/images/wiseReads.svg";
import "../../../assets/css/header.css";
import { Link } from "react-router-dom";
import SearchBook from "../commons/BookSearch";

const Header = () => {
  //console.log("In header component", useContext(BooksContext));
  return (
    <div className="wisereads-logo">
      <div className="wisereads-logo">
        <img
          alt="Wise reads logo"
          src={wisereadsLogo}
          style={{ width: "300px", height: 44, boxShadow: "" }}
        />
      </div>
      <SearchBook />
      {!localStorage.userToken && (
        <div className="link-section">
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      )}
      {}
    </div>
  );
};

export default Header;
