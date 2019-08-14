import React, { Component } from "react";
import AboutWiseReads from "../commons/AboutWisereads";
import { Link } from "react-router-dom";
import WiseReadsLogo from "../../../assets/images/wiseReads.svg";
import { observer } from "mobx-react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import RegisterStore from "../../stores/RegisterStore";
import "../../../assets/css/registration.css";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="split-left">
          <AboutWiseReads />
        </div>

        <div className="split-right">
          <div className="centered">
            <div className="wiseReads-box">
              <div className="login-heading">
                <img
                  alt="Wise reads logo"
                  src={WiseReadsLogo}
                  className="wiseReadsLogo"
                />
                <p className="Login">Register</p>
              </div>
              <div className="form1">
                {/*  {RegisterStore.loginMsg && (
                )} */}
                <div
                  className={RegisterStore.loginMsgClass}
                  style={loginMsg}
                  role="alert"
                >
                  {RegisterStore.loginMsg}
                </div>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    address: "",
                    contactNumber: "",
                    genderId: "",
                    userStatusId: "",
                    password: "",
                    confirmPassword: "",
                    roleId: "",
                    companyName: ""
                  }}
                  validate={values => {
                    let errors = {};
                    RegisterStore.loginMsg = "";
                    if (!values.email) {
                      errors.email = "Email Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                      errors.password = "Password required";
                    }
                    if (!values.confirmPassword) {
                      errors.confirmPassword = "Confirm Password required";
                    }
                    if (
                      values.password &&
                      values.confirmPassword &&
                      values.confirmPassword !== values.password
                    ) {
                      errors.confirmPassword = "Passwords do not match";
                    }
                    if (!values.companyName) {
                      errors.companyName = "Company name is required";
                    } //
                    else if (
                      !/^[a-zA-Z0-9- ]{1,30}$/i.test(values.companyName)
                    ) {
                      errors.companyName = "Invalid First name";
                    }
                    if (!values.firstName) {
                      errors.firstName = "First name is required";
                    } else if (
                      !/^[a-zA-Z0-9- ]{1,30}$/i.test(values.firstName)
                    ) {
                      errors.firstName = "Invalid First name";
                    }
                    if (!values.lastName) {
                      errors.lastName = "Last name is required";
                    } else if (
                      !/^[a-zA-Z0-9- ]{1,30}$/i.test(values.lastName)
                    ) {
                      errors.lastName = "Invalid Last name";
                    }
                    if (!values.address) {
                      errors.address = "Address is required";
                    }
                    if (!values.contactNumber) {
                      errors.contactNumber = "Contact number is required";
                    } //
                    else if (!/^[0-9-]{10}$/i.test(values.contactNumber)) {
                      errors.contactNumber = "Invalid contact number";
                    }
                    if (!values.genderId) {
                      errors.genderId = "Please select gender";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      setSubmitting(false);
                      RegisterStore.registerNewUser(values);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mt-4">
                          <input
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                          />
                          <div className="errorMessages">
                            <div>
                              {errors.firstName &&
                                touched.firstName &&
                                errors.firstName}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mt-4">
                          <input
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                          />
                          <div className="errorMessages">
                            <div>
                              {errors.lastName &&
                                touched.lastName &&
                                errors.lastName}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mt-4">
                          <select
                            placeholder="Select Gender"
                            name="genderId"
                            id="genderId"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.genderId}
                          >
                            <option value="" hidden>
                              -- Select gender --
                            </option>
                            {RegisterStore.genderList.map(gender => {
                              return (
                                <option value={gender.gender_id}>
                                  {gender.gender}
                                </option>
                              );
                            })}
                          </select>
                          <div className="errorMessages">
                            <div>
                              {errors.genderId &&
                                touched.genderId &&
                                errors.genderId}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mt-4">
                          <input
                            placeholder="Phone Number"
                            name="contactNumber"
                            className="form-control"
                            pattern="^[0-9-]{10}$"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.contactNumber}
                          />
                          <div className="errorMessages">
                            <div>
                              {errors.contactNumber &&
                                touched.contactNumber &&
                                errors.contactNumber}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mt-4">
                          <textarea
                            placeholder="House Address"
                            type="text"
                            name="address"
                            className="form-control reg-address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                          />
                          <div className="errorMessages">
                            <div>
                              {errors.address &&
                                touched.address &&
                                errors.address}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mt-4">
                          <div className="row">
                            <div className="col-md-12 ">
                              <input
                                className="form-control"
                                placeholder="Company Name"
                                type="text"
                                name="companyName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.companyName}
                              />
                              <div className="errorMessages">
                                <div>
                                  {errors.companyName &&
                                    touched.companyName &&
                                    errors.companyName}
                                </div>
                              </div>
                            </div>

                            <div className="col-md-12 mt-4">
                              <input
                                className="form-control"
                                placeholder="Email"
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                              />
                              <div className="errorMessages">
                                <div>
                                  {errors.email &&
                                    touched.email &&
                                    errors.email}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 mt-4">
                          <input
                            className="form-control"
                            placeholder="Password"
                            type="password"
                            name="password"
                            formControlName="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          <div className="errorMessages">
                            <div>
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </div>
                            {/* <div>Passwords is required</div>
                            <div>Password must be at least 6 characters</div> */}
                          </div>
                        </div>

                        <div className="col-md-6 mt-4">
                          <input
                            className="form-control"
                            placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                          />
                          <div className="errorMessages">
                            <div>
                              {errors.confirmPassword &&
                                touched.confirmPassword &&
                                errors.confirmPassword}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12 mt-4 already-user-login">
                          <a routerLink="/login">
                            {" "}
                            Already a user: Login&nbsp;&nbsp;
                            <i className="fa fa-sign-in" aria-hidden="true" />
                          </a>
                          <button
                            mat-raised-button
                            className="mat-raised-button mat-primary register-btn"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
