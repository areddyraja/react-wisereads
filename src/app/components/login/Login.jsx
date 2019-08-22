import React, { useState, useEffect } from "react";
import AboutWiseReads from "../commons/AboutWisereads";
import "../../../assets/css/login.css";
import { Link } from "react-router-dom";
import WiseReadsLogo from "../../../assets/images/wiseReads.svg";
//import LoginStore from "../../stores/LoginStore";
import { Redirect } from "react-router-dom";
import { validateLogin } from "../../hooks/login/loginFormValidation";
import useLoginForm from "../../hooks/login/useFormValidation";
import LoginService from "../../services/loginservice";

import {
  INVALID_CRED_MSG,
  BOOTSTRAP_ALERT_CLASS
} from "../../stores/constants";

const LoginForm = () => {
  const { values, errors, handleSubmit, handleInput } = useLoginForm(
    { email: "", password: "" },
    loginCheck,
    validateLogin
  );

  const [loginMsg, setLoginMsg] = useState("");
  const [loginMsgClass, setLoginMsgClass] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  function loginCheck() {
    console.log(" loginCheck is done ", JSON.stringify(values));
    setLoginMsg("");
    setLoginMsgClass("");

    LoginService.login(values)
      .then(response => {
        console.log(JSON.stringify(response));
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
        }, 1600);
      })
      .catch(error => {
        setLoginMsg(INVALID_CRED_MSG);
        setLoginMsgClass(BOOTSTRAP_ALERT_CLASS + "danger");
        console.log(JSON.stringify(error));
      });
  }

  useEffect(() => {
    if (loginSuccess) {
      redirectToHome();
    } /* else {
      return <Redirect to="/login" />;
    } */
  }, [loginSuccess]);

  const redirectToHome = () => {
    return <Redirect to="/home" />;
  };

  const loginMsgWidth = {
    width: 409
  };
  if (localStorage.getItem("userToken")) {
    //return redirectToHome();
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
                    className="login-fields form-control"
                    placeholder="User Name"
                    type="text"
                    name="email"
                    onChange={handleInput}
                    onBlur={handleInput}
                    value={values.email || ""}
                  />
                  <p className="errorMessages">
                    {errors.email && errors.email}
                  </p>
                </div>
                <div className="mt-4">
                  <input
                    className="login-fields form-control"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleInput}
                    onBlur={handleInput}
                    value={values.password || ""}
                  />
                  <p className="errorMessages">
                    {errors.password && errors.password}
                  </p>
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

export default LoginForm;
