import React, { Component } from "react";
import AboutWiseReads from "../commons/AboutWisereads";
import "../../../assets/css/login.css";
import { Link } from "react-router-dom";
import WiseReadsLogo from "../../../assets/images/wiseReads.svg";
import LoginStore from "../../stores/LoginStore";
import { observer } from "mobx-react";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";

@observer
class Login extends Component {
  render() {
    const loginMsg = {
      width: 409
    };
    if (localStorage.getItem("userToken") || LoginStore.loginSuccess) {
      return <Redirect to="/home" />;
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
                {LoginStore.loginMsg && (
                  <div
                    className={LoginStore.loginMsgClass}
                    style={loginMsg}
                    role="alert"
                  >
                    {LoginStore.loginMsg}
                  </div>
                )}
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={values => {
                    let errors = {};
                    LoginStore.loginMsg = "";
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
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      setSubmitting(false);
                      LoginStore.validateLogin(values);
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
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="mt-4">
                        <input
                          className="login-fields form-control"
                          placeholder="User Name"
                          type="text"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <p className="errorMessages">
                          {errors.email && touched.email && errors.email}
                        </p>
                      </div>
                      <div className="mt-4">
                        <input
                          className="login-fields form-control"
                          placeholder="Password"
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <p className="errorMessages">
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          mat-raised-button
                          className="btn-login form-control"
                          disabled={isSubmitting}
                        >
                          <strong>LOGIN</strong> <i className="fa fa-sign-in" />
                        </button>
                        <Link className="reg-link" to="/register">
                          New user? Register here!
                        </Link>
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

export default Login;
