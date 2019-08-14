import React, { Component } from "react";
import Slider from "react-slick";
import MediaCard from "../commons/MediaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue",
        color: "black"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        color: "black"
      }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          {cards.map(card => {
            return (
              <div key={card}>
                <MediaCard />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
