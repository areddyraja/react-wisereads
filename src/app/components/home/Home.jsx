import React from "react";
import HomePageCarousel from "./HomePageCarousel";
import Header from "./header";
import Footer from "./footer";
import SlickCarouselBooks from "../commons/SlickCarousel";

export const Home = () => {
  //console.log(useContext(BooksContext));

  return (
    <div>
      <div style={{ width: "203%" }}>
        <Header />
        <div>
          <HomePageCarousel />
        </div>
        <div style={{ marginLeft: "63px", width: "91%" }}>
          <br />
          <SlickCarouselBooks />
        </div>
        <br />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
