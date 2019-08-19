import {
  capitalizeFirstLetter,
  validateEmail,
  validateMobile
} from "../../utils/FormUtils";

export const validateRegistration = values => {
  let errors = {};
  const keys = ["email", "address", "password"];
  Object.keys(values).forEach(key => {
    if (!values[key]) {
      if (keys.includes(key)) {
        errors[key] = capitalizeFirstLetter(key) + " required";
      } else {
        if (key === "firstName") {
          errors[key] = "First name is required";
        } else if (key === "lastName") {
          errors[key] = "Last name is required";
        } else if (key === "contactNumber") {
          errors[key] = "Contact number is required";
        } else if (key === "genderId") {
          errors[key] = "Please select gender";
        } else if (key === "companyName") {
          errors[key] = "Company name is required";
        } else if (key === "confirmPassword") {
          errors[key] = "Confirm Password required";
        }
      }
    } else {
      let errorVal;
      if (key === "email") {
        errorVal = validateEmail(values[key]);
      } else if (key === "contactNumber") {
        errorVal = validateMobile(values[key]);
      }
      if (errorVal) {
        errors[key] = errorVal;
      }
    }
  });
  if (
    values.password &&
    values.confirmPassword &&
    values.confirmPassword !== values.password
  ) {
    errors["confirmPassword"] = "Passwords do not match";
  }
  return errors;
};
