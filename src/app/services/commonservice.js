import axios from "axios";
import { HEADERS_WITHOUT_TOKEN, HOST_URL } from "../stores/constants";

export default {
  getComboBoxes(tableKeys) {
    return new Promise(function(resolve, reject) {
      axios({
        url: HOST_URL + "api/combo-box-tables",
        method: "POST",
        data: tableKeys,
        headers: HEADERS_WITHOUT_TOKEN
      })
        .then(function(response) {
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};
