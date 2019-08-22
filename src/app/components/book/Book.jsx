import React, { useContext } from "react";
import "../../../assets/css/book.css";
import { BooksContext } from "../../contexts/BooksContext";

const Book = () => {
  const {
    values: { selectedBook }
  } = useContext(BooksContext);
  console.log(JSON.stringify(selectedBook));
  return (
    <div>
      <section className="container-fluid mb-5">
        <div className="book-details">
          <h5 className="book-title">{selectedBook.title}</h5>
          <div
            className="book-header"
            fxLayout
            fxLayoutAlign="left"
            fxLayoutGap="10px"
          >
            <div fxFlex="15%">
              <img
                className="book-img"
                alt="Book"
                src={selectedBook.imagesUrl1}
              />
            </div>
            <div>
              <p className="book-desc">{selectedBook.bookDescription}</p>
            </div>
          </div>
          <div
            className="book-cont"
            fxLayout
            fxLayoutAlign="left"
            fxLayoutGap="10px"
          >
            <div fxFlex="50%">
              <ul style={{ listStyle: "none" }}>
                <li>
                  Author: <span>{selectedBook.author}</span>
                </li>
                <li>
                  Genre: <span>{selectedBook.genre}</span>
                </li>
                <li>
                  Language: <span>English</span>
                </li>
                <li>
                  publisher: <span>{selectedBook.publisher}</span>
                </li>
                <li>
                  Edition: <span>{selectedBook.edition}</span>
                </li>
                <li>
                  Price: <span>{selectedBook.bookPrice}</span>
                </li>
              </ul>
            </div>

            <div fxFlex="50%">
              <ul style={{ listStyle: "none" }}>
                <li>
                  Rental Value: <span>Rs. {selectedBook.rentPerDay}</span>
                </li>
                <li>
                  Owner:
                  <span>
                    {selectedBook.ownerFirstName}
                    {selectedBook.ownerLastName}
                  </span>
                </li>
                <li>
                  Publication Date:
                  <span>{selectedBook.publicationDate | new Date()}</span>
                </li>
                <li>
                  No. of pages: <span>{selectedBook.numberOfPages}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="book-footer">
            <button className="checkout" mat-button mat-raised-button>
              CheckOut Now
            </button>
            <button
              style={{
                float: "right",
                backgroundColor: " rgb(68, 66, 66)",
                color: "#ffffff"
              }}
              mat-button
              /* routerLink="/" */
            >
              Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
