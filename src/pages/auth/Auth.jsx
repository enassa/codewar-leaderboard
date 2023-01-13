import React from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import { useState } from "react";
import "./login/login.css";

export default function Auth() {
  const [visibleForm, setVisibleForm] = useState({
    onOpenRemoveSignUpForm: true,
    loginForm: true,
    registerForm: false,
  });

  function toggleVisibleForm(formName) {
    // console.log(formName);
    setVisibleForm((prevForm) => {
      for (var key in prevForm) {
        if (key === formName) prevForm[key] = true;
        else prevForm[key] = false;
      }
      return {
        ...prevForm,
        ["onOpenRemoveSignUpForm"] : false
      };
    });
  }

  return (
    <div className="auth__page">
      <div className="dark_overlay"></div>
      <Register
        show={visibleForm.registerForm}
        showOnOpen={visibleForm.onOpenRemoveSignUpForm}
        toggleVisibleForm={toggleVisibleForm}
      />
      <Login
        show={visibleForm.loginForm}
        toggleVisibleForm={toggleVisibleForm}
      />
    </div>
  );
}
