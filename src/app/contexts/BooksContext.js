import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksContextProvider = props => {
  const [selectedBook, setSelectedBook] = useState({});
  const values = { selectedBook, setSelectedBook };
  return (
    <BooksContext.Provider value={{ values }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
