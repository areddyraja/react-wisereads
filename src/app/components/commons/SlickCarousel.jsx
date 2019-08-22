import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import MediaCard from "../commons/MediaCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllBooks } from "../../services/booksService";
import "../../../assets/css/card.css";

/**
 * This function is used to get the next book which is card type
 * @param {*} props
 */
const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#808080",
        color: "red"
      }}
      onClick={onClick}
    />
  );
};

/**
 * This function is used to get the previous book which is card type
 * It is used for previous book button.
 * @param {*} props
 */
const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#808080",
        color: "black"
      }}
      onClick={onClick}
    />
  );
};

/**
 * This component is used show the books slider on home page
 * Books are displayed as cards
 * @param {*} props
 */
export const BooksCarousel = () => {
  const [books, setBooks] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const getBooks = () => {
    getAllBooks()
      .then(response => {
        const {
          data: {
            resultsMap: { books }
          }
        } = { ...response };

        setBooks(books);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBooks();
  }, []);

  const headingStyle = {
    color: "#000080",
    marginLeft: "-87%"
  };

  return (
    <div>
      <h5 style={headingStyle}>Story books :</h5>

      <Slider {...settings}>
        {books
          .filter(book => book.genreId === 1)
          .map(book => {
            return (
              <div key={book.bookId}>
                <MediaCard book={book} />
              </div>
            );
          })}
      </Slider>
      <br />
      <h5 style={headingStyle}>Comic books : </h5>
      <Slider {...settings}>
        {books
          .filter(book => book.genreId === 2)
          .map(book => {
            return (
              <div key={book.bookId}>
                <MediaCard book={book} />
              </div>
            );
          })}
      </Slider>
      <br />
      <h5 style={headingStyle}>Fiction books : </h5>
      <Slider {...settings}>
        {books
          .filter(book => book.genreId === 3)
          .map(book => {
            return (
              <div key={book.bookId}>
                <MediaCard book={book} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default BooksCarousel;
