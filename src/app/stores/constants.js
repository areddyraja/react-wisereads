export const HOST_URL = "http://13.232.104.39:8080/";
//export const HOST_URL = "http://localhost:8090/";
export const ERROR_MSG = "Error while retrieving the data";
export const HEADERS_WITHOUT_TOKEN = {
  "Content-Type": "application/json"
};

export const HEADERS_WITH_TOKEN = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("Token")
};

export const INVALID_CRED_MSG = "Username / password is incorrect";
export const BOOTSTRAP_ALERT_CLASS = "alert alert-";

//Patterns

export const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const MOBILE_NUM_PATTERN = /^[0-9-]{10}$/;
//
