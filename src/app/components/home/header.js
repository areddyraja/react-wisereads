import React from "react";
import wisereadsLogo from "../../../assets/images/wiseReads.svg";
import "../../../assets/css/header.css";
import { Link } from "react-router-dom";

export default () => (
  <div className="wisereads-logo">
    <div className="wisereads-logo">
      <img
        alt="Wise reads logo"
        src={wisereadsLogo}
        style={{ width: "300px", height: 44, boxShadow: "" }}
      />
    </div>
    <div className="search-bar">
      <input className="search-input" type="text" placeholder="Search Book" />
      <i className="fa fa-search" />
    </div>
    {!localStorage.userToken && (
      <div className="link-section">
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    )}
    {}
  </div>
);
