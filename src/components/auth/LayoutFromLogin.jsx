import React from "react";
import HeaderLogin from "../headers/HeaderLogin";
import LoginForm from "./LoginForm";

function LayoutFromLogin() {
  return (
    <div className="auth-container flex flex-col gap-6 justify-center items-center w-full md:max-w-3xl relative z-50">
      <HeaderLogin />
      <LoginForm />
    </div>
  );
}

export default LayoutFromLogin;
