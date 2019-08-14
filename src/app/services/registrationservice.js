import axios from "axios";
import { HEADERS_WITHOUT_TOKEN, HOST_URL } from "../stores/constants";

export default {
  registerNewUser(user) {
    return new Promise(function(resolve, reject) {
      axios({
        url: HOST_URL + "api/users",
        method: "POST",
        data: user,
        headers: HEADERS_WITHOUT_TOKEN
      })
        .then(function(response) {
          resolve(response);
        })
        .catch(function(error) {
          reject(error.response);
        });
    });
  }
};
