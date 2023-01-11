import React from "react";
import "../login/login.css";
import {
  RemoveRedEyeOutlined,
  AlternateEmailOutlined,
  LoginSharp,
  LockOutlined,
  Error,
} from "@mui/icons-material";
import { emailRegex } from "../../../constants/reusable-functions";
import { useState } from "react";
import { images } from "./../../../assets/images/images";

import { useAuthService } from "../../../store-and-services/auth-slice/auth-service";

export default function Register(props) {
  const { loginAsync, loadingAuth, authResponse, userIsLoggedIn } =
    useAuthService();


  function handleRegisterData(event) {
    setRegisterFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [registerFormData, setRegisterFormData] = useState({
    registerEmail: "",
    registerUsername: "",
    registerPassword: "",
    registerConfirmPassword: "",
  });

  function handleSignUp() {}

  return (
    <div
      className={`register__container container vertical-center no_display  ${
        props.show ? "fade-up" : "fade-out"
      }`}
    >
      <h1>Create an account</h1>
      <p className="small_header">Required fields have an asterisk *</p>
      <form>
        <label htmlFor="registerUsername">Username*</label>
        <div className="input-area">
          <img src={images.personIcon} alt="" className="input-icon" />
          <input
            type="text"
            value={registerFormData.registerUsername}
            onChange={handleRegisterData}
            name="registerUsername"
          />
        </div>

        <label htmlFor="registerEmail">Email Address*</label>
        <div className="input-area">
          <img src={images.emailIcon} alt="" className="input-icon" />
          <input
            type="email"
            value={registerFormData.registerEmail}
            onChange={handleRegisterData}
            name="registerEmail"
          />
        </div>

        <label htmlFor="registerPassword">Password*</label>
        <div className="input-area">
          <img src={images.passwordIcon} alt="" className="input-icon" />
          <input
            type="password"
            value={registerFormData.registerPassword}
            onChange={handleRegisterData}
            name="registerPassword"
          />
        </div>

        <label htmlFor="registerConfirmPassword">Confirm Password*</label>
        <div className="input-area">
          <img src={images.passwordIcon} alt="" className="input-icon" />
          <input
            type="password"
            value={registerFormData.registerConfirmPassword}
            onChange={handleRegisterData}
            name="registerConfirmPassword"
          />
        </div>

        <button onClick={handleSignUp} className="btn">
          Create an Account
        </button>
        <p className="bottom-text">
          Already have an Account?
          <button
            className="text_link"
            onClick={() => props.toggleVisibleForm("loginForm")}
          >
            Sign in instead
          </button>
        </p>
      </form>
    </div>
  );
}
