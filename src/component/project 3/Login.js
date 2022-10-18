import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <form onSubmit={(e) => loginUser(e)} className="login-area">
      <div className="login-form">
        <div className="login-title">Login</div>
        <input
          className="login-input"
          type="text"
          placeholder="Email address"
        ></input>
      </div>
      <div className="login-form">
        <input
          className="login-input"
          type="password"
          placeholder="Password"
        ></input>
      </div>
      <div>
        <input className="login-button" type="submit" value="로그인"></input>
      </div>
    </form>
  );
};

export default Login;
