import React, { useState, useEffect } from "react";
import AboutWiseReads from "../commons/AboutWisereads";
import WiseReadsLogo from "../../../assets/images/wiseReads.svg";
import "../../../assets/css/registration.css";
import useRegisterForm from "../../hooks/login/useFormValidation";
import { validateRegistration } from "../../hooks/register/registerFormValidations";
import RegisterService from "../../services/registrationservice";
import { BOOTSTRAP_ALERT_CLASS } from "../../stores/constants";
import { Redirect } from "react-router-dom";

const Register = () => {
  const genderList = [
    {
      gender_id: 1,
      gender: "male"
    },
    {
      gender_id: 2,
      gender: "female"
    }
  ];

  const [registerMsg, setRegisterMsg] = useState("");
  const [registerMsgClass, setRegisterClass] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const registerNewUser = () => {
    const user = { ...values };
    setRegisterMsg("");
    setRegisterClass("");
    delete user["confirmPassword"];
    user.roleId = 4;
    user.userStatusId = 1;
    user.createdBy = user.email;
    console.log(JSON.stringify(user));
    RegisterService.registerNewUser(user)
      .then(response => {
        console.log(JSON.stringify(response));
        const {
          data: { message }
        } = response;
        //setRegisterMsg(message);
        setRegisterMsg(message + ", Please login to continue...");
        setRegisterClass(BOOTSTRAP_ALERT_CLASS + "success");

        setTimeout(() => {
          setRegisterSuccess(true);
        }, 1500);
      })
      .catch(error => {
        setRegisterMsg(error["data"]["errors"]["email"]["emailAlreadyExists"]);
        setRegisterClass(BOOTSTRAP_ALERT_CLASS + "danger");
        console.log(JSON.stringify(error));
      });
  };

  useEffect(() => {
    if (registerSuccess) {
      redirectToHome();
    }
  }, [registerSuccess]);

  const { values, errors, handleSubmit, handleInput } = useRegisterForm(
    {
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
    },
    registerNewUser,
    validateRegistration
  );
  const redirectToHome = () => {
    console.log("In redirect to lgoin");
    return <Redirect to="/login" />;
  };

  if (registerSuccess) {
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
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      className="form-control"
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={values.firstName || ""}
                    />
                    <div className="errorMessages">
                      <div>{errors.firstName && errors.firstName}</div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <input
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      className="form-control"
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={values.lastName || ""}
                    />
                    <div className="errorMessages">
                      <div>{errors.lastName && errors.lastName}</div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <select
                      placeholder="Select Gender"
                      name="genderId"
                      id="genderId"
                      className="form-control"
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={values.genderId || ""}
                    >
                      <option value="" hidden>
                        -- Select gender --
                      </option>
                      {genderList.map(gender => {
                        return (
                          <option value={gender.gender_id}>
                            {gender.gender}
                          </option>
                        );
                      })}
                    </select>
                    <div className="errorMessages">
                      <div>{errors.genderId && errors.genderId}</div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4">
                    <input
                      placeholder="Phone Number"
                      name="contactNumber"
                      className="form-control"
                      pattern="^[0-9-]{10}$"
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={values.contactNumber || ""}
                    />
                    <div className="errorMessages">
                      <div>{errors.contactNumber && errors.contactNumber}</div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <textarea
                      placeholder="House Address"
                      type="text"
                      name="address"
                      className="form-control reg-address"
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={values.address || ""}
                    />
                    <div className="errorMessages">
                      <div>{errors.address && errors.address}</div>
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
                          onChange={handleInput}
                          onBlur={handleInput}
                          value={values.companyName || ""}
                        />
                        <div className="errorMessages">
                          <div>{errors.companyName && errors.companyName}</div>
                        </div>
                      </div>

                      <div className="col-md-12 mt-4">
                        <input
                          className="form-control"
                          placeholder="Email"
                          type="text"
                          name="email"
                          onChange={handleInput}
                          onBlur={handleInput}
                          value={values.email || ""}
                        />
                        <div className="errorMessages">
                          <div>{errors.email && errors.email}</div>
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
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={values.password || ""}
                    />
                    <div className="errorMessages">
                      <div>{errors.password && errors.password}</div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4">
                    <input
                      className="form-control"
                      placeholder="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      onChange={handleInput}
                      onBlur={handleInput}
                      value={values.confirmPassword || ""}
                    />
                    <div className="errorMessages">
                      <div>
                        {errors.confirmPassword && errors.confirmPassword}
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
