import React, { useState, useEffect, useContext } from "react";
import { searchBooks } from "../../services/booksService";
import SearchInput from "react-search-input";
import "../../../assets/css/searchbook.css";
import { Link } from "react-router-dom";
import { BooksContext } from "../../contexts/BooksContext";

export const SearchBook = () => {
  const [searchBookInput, setSearchBookInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const {
    values: { setSelectedBook }
  } = useContext(BooksContext);

  useEffect(() => {
    setSearchResults([]);
    searchBooks(searchBookInput)
      .then(response => {
        const {
          data: {
            resultsMap: { books }
          }
        } = response;
        setSearchResults(books);
        setSelectedBook(books[0]);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  }, [searchBookInput]);

  return (
    <div>
      <div className="search-bar">
        <SearchInput
          className="search-input"
          placeholder="Search Book"
          value={searchBookInput}
          onChange={value => setSearchBookInput(value)}
        />
      </div>
      {searchResults.map(book => {
        const url = "/book-details/" + book.title;
        return (
          <div className="search-results" key={book.bookId}>
            <Link to={url} onClick={() => setSelectedBook(book)}>
              {book.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBook;
