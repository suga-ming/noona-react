import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-area">
      <form className="login-form">
        <div className="login-title">Login</div>
        <input
          className="login-input"
          type="text"
          placeholder="Email address"
        ></input>
      </form>
      <form className="login-form">
        <input
          className="login-input"
          type="password"
          placeholder="Password"
        ></input>
      </form>
      <form>
        <input className="login-button" type="submit" value="로그인"></input>
      </form>
    </div>
  );
};

export default Login;
