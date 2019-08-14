import React, { Component } from "react";
import HomePageCarousel from "./HomePageCarousel";
import Header from "./header";
import Footer from "./footer";
import SlickCarouselBooks from "../commons/SlickCarousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ width: "202%" }}>
          <HomePageCarousel />
          <br />
          <SlickCarouselBooks />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
