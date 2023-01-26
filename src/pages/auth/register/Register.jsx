import React from "react";
import "../login/login.css";
import { Error } from "@mui/icons-material";
import { emailRegex } from "../../../constants/reusable-functions";
import { useState } from "react";
import { images } from "./../../../assets/images/images";

import { useAuthService } from "../../../store-and-services/auth-slice/auth-service";
import { useNavigate } from "react-router-dom";
import { mockMode } from "../../../config/config";
import Loader from "./../../../components/loader/Loader";

export default function Register(props) {
  const { registerAsync, loadingAuth, authResponse, registerationMock } =
    useAuthService();
  const navigate = useNavigate();

  function handleRegisterData(event) {
    event.preventDefault();
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

  const [emailTouched, setEmailTouched] = useState(false);
  const emailValid = registerFormData.registerEmail.match(emailRegex());

  const [usernameTouched, setUsernameTouched] = useState(false);
  const usernameValid = registerFormData.registerUsername.length > 2;

  const [passwordTouched, setPasswordTouched] = useState(false);
  const passwordValid = registerFormData.registerPassword.length > 6;

  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const confirmPasswordValid =
    registerFormData.registerConfirmPassword ===
    registerFormData.registerPassword;

  function handleSignUp() {
    const data = {
      username: registerFormData.registerUsername,
      email: registerFormData.registerEmail,
      password: registerFormData.registerPassword,
    };
    mockMode ? registerationMock(data) : registerAsync(data);
  }

  return (
    <div className="auth__page">
      <div className="dark_overlay"></div>
      <div
        className={`register__container container  fade-up`}
        // className={`register__container container vertical-center no_display fade-up ${
        //   !props.showOnOpen ? (props.show ? "fade-up" : "fade-out") : ""
        // }`}
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
              onBlur={() => setUsernameTouched(true)}
            />
          </div>
          {usernameTouched ? (
            !usernameValid ? (
              <div className="field_error">Invalid Username!</div>
            ) : null
          ) : null}

          <label htmlFor="registerEmail">Email Address*</label>
          <div className="input-area">
            <img src={images.authEmailIcon} alt="" className="input-icon" />
            <input
              type="email"
              value={registerFormData.registerEmail}
              onChange={handleRegisterData}
              name="registerEmail"
              onBlur={() => setEmailTouched(true)}
            />
          </div>
          {emailTouched ? (
            !emailValid ? (
              <div className="field_error">Invalid Email!</div>
            ) : null
          ) : null}

          <label htmlFor="registerPassword">Password*</label>
          <div className="input-area">
            <img src={images.passwordIcon} alt="" className="input-icon" />
            <input
              type="password"
              value={registerFormData.registerPassword}
              onChange={handleRegisterData}
              name="registerPassword"
              onBlur={() => setPasswordTouched(true)}
            />
          </div>
          {passwordTouched ? (
            !passwordValid ? (
              <div className="field_error">Invalid Password!</div>
            ) : null
          ) : null}

          <label htmlFor="registerConfirmPassword">Confirm Password*</label>
          <div className="input-area">
            <img src={images.passwordIcon} alt="" className="input-icon" />
            <input
              type="password"
              value={registerFormData.registerConfirmPassword}
              onChange={handleRegisterData}
              name="registerConfirmPassword"
              onBlur={() => setConfirmPasswordTouched(true)}
              required
            />
          </div>
          {confirmPasswordTouched ? (
            !confirmPasswordValid ? (
              <div className="field_error">Passwords do not match!</div>
            ) : null
          ) : null}

          {authResponse?.message !== undefined &&
            authResponse.page === "login" &&
            !loadingAuth && (
              <div className="w-full mt-[20px] h-[5px]">
                <div className="w-full  bottom-[10%] right-0 flex  justify-center items-center text-maroon-400 animate-rise">
                  <Error className="text-red-400 mr-2" />
                  {authResponse?.message}.
                </div>
              </div>
            )}

          <button
            onClick={handleSignUp}
            className="btn"
            disabled={
              loadingAuth ||
              !emailValid ||
              !passwordValid ||
              !usernameValid ||
              !confirmPasswordValid
            }
          >
            {loadingAuth && (
              <div className="w-full h-full flex justify-center items-center">
                {" "}
                <Loader /> <span className="ml-2">
                  Creating account...
                </span>{" "}
              </div>
            )}
            {!loadingAuth && "Create an Account"}
          </button>
          <p className="bottom-text">
            Already have an Account?
            <button className="text_link" onClick={() => navigate("/login")}>
              Sign in instead
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
