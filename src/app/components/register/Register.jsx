import React, { useState, useEffect } from "react";
import AboutWiseReads from "../commons/AboutWisereads";
import WiseReadsLogo from "../../../assets/images/wiseReads.svg";
import "../../../assets/css/registration.css";
import RegisterService from "../../services/registrationService";
import { BOOTSTRAP_ALERT_CLASS } from "../../stores/constants";
import { Redirect, Link } from "react-router-dom";
import ErrorMessage from "../commons/ErrorMessage";
import "../../../assets/css/common.css";
import { getComboBoxes } from "../../services/commonService";
import { registrationSchema } from "../../utils/formYupSchemas";
import { onSubmitForm, validateOnInputChange } from "../../utils/validateForm";

/**
 * Register component is used to register a new user into the application
 */
const Register = () => {
  const [genderList, setGenderList] = useState([]);
  const [registerMsg, setRegisterMsg] = useState("");
  const [registerMsgClass, setRegisterClass] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({
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
  });

  const handleInput = async event => {
    setUser({ ...user, [event.target.name]: event.target.value });
    setErrors(await validateOnInputChange(event, registrationSchema, errors));
  };

  //It handles the form submission and validates each mandatory field of the form
  const handleSubmit = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(await onSubmitForm(registrationSchema, user));
  };

  useEffect(() => {
    if (localStorage.getItem("isRegistered")) {
      localStorage.removeItem("isRegistered");
    }
    getComboBoxes(["gender"])
      .then(response => {
        const {
          data: {
            result: { gender }
          }
        } = response;
        setGenderList(gender);
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const userObj = { ...user };
      setRegisterMsg("");
      setRegisterClass("");
      delete userObj["confirmPassword"];
      userObj.roleId = 4;
      userObj.userStatusId = 1;
      userObj.createdBy = userObj.email;
      console.log(JSON.stringify(userObj));
      RegisterService.registerNewUser(userObj)
        .then(response => {
          console.log(JSON.stringify(response));
          const {
            data: { message }
          } = response;
          setRegisterMsg(message + ", Please login to continue...");
          setRegisterClass(BOOTSTRAP_ALERT_CLASS + "success");
          localStorage.setItem("isRegistered", true);
          setTimeout(() => {
            setRegisterMsg("");
            setRegisterClass("");
            setRegisterSuccess(true);
          }, 1500);
        })
        .catch(error => {
          const {
            data: {
              errors: {
                email: { emailAlreadyExists }
              }
            }
          } = error;
          setRegisterMsg(emailAlreadyExists);
          setRegisterClass(BOOTSTRAP_ALERT_CLASS + "danger");
          setTimeout(() => {
            setRegisterMsg("");
            setRegisterClass("");
          }, 1500);
          console.log(JSON.stringify(error));
        });
    }
    setIsSubmitting(false);
  }, [errors]);

  useEffect(() => {
    if (registerSuccess) redirectToHome();
  }, [registerSuccess]);

  const redirectToLogin = () => {
    console.log("In redirect login");
    return <Redirect to="/login" />;
  };

  const redirectToHome = () => {
    return <Redirect to="/home" />;
  };

  //TODO
  //Need to change these conditions to state and change this isRegistered
  if (localStorage.getItem("isRegistered")) {
    return redirectToLogin();
  }

  //TODO
  //Need to change these conditions to state and change this isRegistered
  if (localStorage.getItem("userToken")) {
    return redirectToHome();
  }

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
              {registerMsg && (
                <div className={registerMsgClass}>{registerMsg}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mt-4">
                    <input
                      placeholder="First Name *"
                      type="text"
                      name="firstName"
                      className={`form-control ${
                        errors.firstName ? "error-highlight" : ""
                      }`}
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={user.firstName || ""}
                    />
                    <ErrorMessage message={errors.firstName} />
                  </div>
                  <div className="col-md-6 mt-4">
                    <input
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      className={`form-control ${
                        errors.lastName ? "error-highlight" : ""
                      }`}
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={user.lastName || ""}
                    />
                    <ErrorMessage message={errors.lastName} />
                  </div>
                  <div className="col-md-6 mt-4">
                    <select
                      placeholder="Select Gender"
                      name="genderId"
                      id="genderId"
                      className={`form-control ${
                        errors.genderId ? "error-highlight" : ""
                      }`}
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={user.genderId || ""}
                    >
                      <option value="" hidden>
                        -- Select gender --
                      </option>
                      {genderList.map(gender => {
                        return (
                          <option
                            key={gender.gender_id}
                            value={gender.gender_id}
                          >
                            {gender.gender}
                          </option>
                        );
                      })}
                    </select>
                    <ErrorMessage message={errors.genderId} />
                  </div>

                  <div className="col-md-6 mt-4">
                    <input
                      placeholder="Phone Number"
                      name="contactNumber"
                      className={`form-control ${
                        errors.contactNumber ? "error-highlight" : ""
                      }`}
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={user.contactNumber || ""}
                    />
                    <ErrorMessage message={errors.contactNumber} />
                  </div>
                  <div className="col-md-6 mt-4">
                    <textarea
                      placeholder="House Address"
                      type="text"
                      name="address"
                      className={`form-control reg-address ${
                        errors.address ? "error-highlight" : ""
                      }`}
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={user.address || ""}
                    />
                    <ErrorMessage message={errors.address} />
                  </div>

                  <div className="col-md-6 mt-4">
                    <div className="row">
                      <div className="col-md-12 ">
                        <input
                          className={`form-control ${
                            errors.companyName ? "error-highlight" : ""
                          }`}
                          placeholder="Company Name"
                          type="text"
                          name="companyName"
                          onChange={handleInput}
                          onBlur={handleInput}
                          value={user.companyName || ""}
                        />
                        <ErrorMessage message={errors.companyName} />
                      </div>

                      <div className="col-md-12 mt-4">
                        <input
                          className={`form-control ${
                            errors.email ? "error-highlight" : ""
                          }`}
                          placeholder="Email"
                          type="text"
                          name="email"
                          onChange={handleInput}
                          onBlur={handleInput}
                          value={user.email || ""}
                        />
                        <ErrorMessage message={errors.email} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4">
                    <input
                      className={`form-control ${
                        errors.password ? "error-highlight" : ""
                      }`}
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={user.password || ""}
                    />
                    <ErrorMessage message={errors.password} />
                  </div>

                  <div className="col-md-6 mt-4">
                    <input
                      className={`form-control ${
                        errors.confirmPassword ? "error-highlight" : ""
                      }`}
                      placeholder="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={user.confirmPassword || ""}
                    />
                    <ErrorMessage message={errors.confirmPassword} />
                  </div>

                  <div className="col-md-12 mt-4 already-user-login">
                    <Link to="/login">
                      Already a user ? Login here! &nbsp;&nbsp;
                      <i className="fa fa-sign-in" aria-hidden="true" />
                    </Link>
                    <button
                      className="mat-raised-button mat-primary register-btn"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
