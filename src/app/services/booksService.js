import axios from "axios";
import { HEADERS_WITHOUT_TOKEN, HOST_URL } from "../stores/constants";

export const getAllBooks = () => {
  return new Promise(function(resolve, reject) {
    axios({
      url: HOST_URL + "api/books",
      method: "GET",
      headers: HEADERS_WITHOUT_TOKEN
    })
      .then(function(response) {
        resolve(response);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

export const searchBooks = input => {
  return new Promise(function(resolve, reject) {
    axios({
      url: HOST_URL + "api/books/search/" + input,
      method: "GET",
      headers: HEADERS_WITHOUT_TOKEN
    })
      .then(function(response) {
        // console.log(JSON.stringify(response));
        resolve(response);
      })
      .catch(function(error) {
        //console.log(JSON.stringify(error));
        reject(error);
      });
  });
};
