import React, { useState, useEffect } from "react";
import AboutWiseReads from "../commons/AboutWisereads";
import "../../../assets/css/login.css";
import { Link } from "react-router-dom";
import WiseReadsLogo from "../../../assets/images/wiseReads.svg";
import { Redirect } from "react-router-dom";
import LoginService from "../../services/loginService";
import {
  INVALID_CRED_MSG,
  BOOTSTRAP_ALERT_CLASS
} from "../../stores/constants";
import { validateOnInputChange, onSubmitForm } from "../../utils/validateForm";
import { loginSchema } from "../../utils/formYupSchemas";
import ErrorMessage from "../commons/ErrorMessage";
import "../../../assets/css/common.css";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [loginMsg, setLoginMsg] = useState("");
  const [loginMsgClass, setLoginMsgClass] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  //It handles the input changes and validates for each key stroke
  const handleInput = async event => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors(await validateOnInputChange(event, loginSchema, errors));
  };

  //It handles the form submission and validates each mandatory fields of the form
  const handleSubmit = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(await onSubmitForm(loginSchema, values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      LoginService.login(values)
        .then(response => {
          const {
            data: { message }
          } = response;
          setLoginMsg(message);
          setLoginMsgClass(BOOTSTRAP_ALERT_CLASS + "success");
          const {
            data: {
              resultsMap: { sessionToken, userDetails }
            }
          } = response;
          setTimeout(() => {
            localStorage.setItem("userToken", sessionToken);
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            setLoginSuccess(true);
          }, 1500);
        })
        .catch(error => {
          console.log(JSON.stringify(error));
          setLoginMsg(INVALID_CRED_MSG);
          setLoginMsgClass(BOOTSTRAP_ALERT_CLASS + "danger");
          setTimeout(() => {
            setLoginMsg("");
            setLoginMsgClass("");
          }, 1500);
        });
    }
    setIsSubmitting(false);
  }, [errors]);

  const redirectToHome = () => {
    console.log("Before page redirect");
    return <Redirect to="/home" />;
  };

  useEffect(() => {
    if (loginSuccess) redirectToHome();
  }, [loginSuccess]);

  const loginMsgWidth = {
    width: 409
  };
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
              <p className="Login">Login</p>
            </div>
            <div className="form1">
              {loginMsg && (
                <div
                  className={loginMsgClass}
                  style={loginMsgWidth}
                  role="alert"
                >
                  {loginMsg}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <input
                    className={`login-fields form-control ${
                      errors.email ? "error-highlight" : ""
                    }`}
                    placeholder="User Name"
                    type="text"
                    name="email"
                    onChange={handleInput}
                    onBlur={handleInput}
                  />
                  <ErrorMessage message={errors.email} />
                </div>
                <div className="mt-4">
                  <input
                    className={`login-fields form-control ${
                      errors.password ? "error-highlight" : ""
                    }`}
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleInput}
                    onBlur={handleInput}
                  />
                  <ErrorMessage message={errors.password} />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    mat-raised-button
                    className="btn-login form-control"
                  >
                    <strong>LOGIN</strong> <i className="fa fa-sign-in" />
                  </button>
                  <Link className="reg-link" to="/register">
                    New user? Register here!
                  </Link>
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

export default Login;
