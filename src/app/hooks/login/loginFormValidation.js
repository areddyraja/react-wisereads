import { capitalizeFirstLetter, validateEmail } from "../../utils/FormUtils";

export const validateLogin = values => {
  let errors = {};

  Object.keys(values).forEach(key => {
    if (!values[key]) {
      errors[key] = capitalizeFirstLetter(key) + " required";
    } else {
      if (key === "email") {
        let emailVal = validateEmail(values[key]);
        if (emailVal) {
          errors["email"] = emailVal;
        }
      }
    }
  });
  return errors;
};
