import React from "react";
import { Error } from "@mui/icons-material";
import "./login.css";
import { emailRegex } from "../../../constants/reusable-functions";
import { useState } from "react";
import { images } from "./../../../assets/images/images";

import { useAuthService } from "../../../store-and-services/auth-slice/auth-service";
import { useNavigate } from "react-router-dom";
import { mockMode } from "./../../../config/config";
import Loader from "../../../components/loader/Loader";

export default function Login(props) {
  const { loginAsync, loadingAuth, authResponse, loginMock } = useAuthService();
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [emailTouched, setEmailTouched] = useState(false);
  const emailValid = loginFormData.loginEmail.match(emailRegex());
  const [passwordTouched, setPasswordTouched] = useState(false);
  const passwordValid = loginFormData.loginPassword.length > 6;

  function handleLoginData(event) {
    setLoginFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    const data = {
      email: loginFormData.loginEmail,
      password: loginFormData.loginPassword,
    };
    mockMode ? loginMock(data) : loginAsync(data);
  }

  return (
    <div className="auth__page">
      <div className="dark_overlay"></div>
      <div
        className={` login__container container fade-up`}
        // className={` login__container container vertical-center ${
        //   props.show ? "fade-up" : "fade-out"
        // }`}
      >
        {/* <h1 className="codl" >codl</h1> */}
        <h1>Welcome back!</h1>
        <p className="small_header">
          Please fill in your credentials to continue
        </p>
        <form>
          <label htmlFor="loginEmail">Email Address*</label>
          <div className="input-area">
            <img src={images.authEmailIcon} alt="" className="input-icon" />
            <input
              type="email"
              value={loginFormData.loginEmail}
              onChange={handleLoginData}
              onBlur={() => setEmailTouched(true)}
              name="loginEmail"
              pattern={emailRegex()}
            />
          </div>
          {emailTouched ? (
            !emailValid ? (
              <div className="field_error">Invalid Email!</div>
            ) : null
          ) : null}

          <label htmlFor="loginEmail">Password*</label>
          <div className="input-area">
            <img src={images.passwordIcon} alt="" className="input-icon" />
            <input
              type="password"
              value={loginFormData.loginPassword}
              onChange={handleLoginData}
              onBlur={() => setPasswordTouched(true)}
              name="loginPassword"
              required
            />
          </div>
          {passwordTouched ? (
            !passwordValid ? (
              <div className="field_error">Invalid Password!</div>
            ) : null
          ) : null}

          {authResponse?.message !== undefined &&
            authResponse.page === "login" &&
            !loadingAuth && (
              <div className="w-full mt-[20px] h-[5px]">
                <div className="w-full  bottom-[10%] right-0 flex  justify-center items-center text-maroon-400 animate-rise">
                  <Error className="text-maroon-400 mr-2" />
                  {authResponse?.message}.
                </div>
              </div>
            )}

          <button
            onClick={handleLogin}
            className={`btn  ${
              loadingAuth ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={loadingAuth || !emailValid || !passwordValid}
          >
            {loadingAuth && (
              <div className="w-full h-full flex justify-center items-center">
                {" "}
                <Loader /> <span className="ml-2">Logging in</span>{" "}
              </div>
            )}
            {!loadingAuth && "Login"}
          </button>
          <p className="bottom-text">
            Don't have an Account?
            <button className="text_link" onClick={() => navigate("/register")}>
              Sign up instead
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
