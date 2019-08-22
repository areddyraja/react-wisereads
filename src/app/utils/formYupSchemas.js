import * as Yup from "yup";
import { MOBILE_NUM_PATTERN } from "../stores/constants";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Enter an email"),
  password: Yup.string()
    .min(2, "Password too Short!")
    .max(70, "Password too Long!")
    .required("Enter password")
});

export const registrationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Enter an email"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter first name"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter last name"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter address"),
  contactNumber: Yup.string()
    .matches(MOBILE_NUM_PATTERN, "Enter valid mobile number")
    .required("Enter mobile number"),
  genderId: Yup.string()
    .min(1, "Select gender")
    .required("Select gender"),
  password: Yup.string()
    .min(2, "Password too Short!")
    .max(70, "Password too Long!")
    .required("Enter password"),
  //TODO need to validate match passwords
  confirmPassword: Yup.string()
    ///.valid(Yup.ref("password"), "Passwords do not match")
    .required("Enter confirm password"),
  companyName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter company name")
});
