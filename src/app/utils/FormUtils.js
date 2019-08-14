import { EMAIL_PATTERN, MOBILE_NUM_PATTERN } from "../stores/constants";

export const capitalizeFirstLetter = value => {
  return value.substring(0, 1).toUpperCase() + value.substring(1);
};

export const validateEmail = value => {
  if (!EMAIL_PATTERN.test(value)) {
    return "Invalid email address";
  }
  return "";
};

export const validateMobile = value => {
  if (!MOBILE_NUM_PATTERN.test(value)) {
    return "Invalid Mobile number";
  }
  return "";
};
