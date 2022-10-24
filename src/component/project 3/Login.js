import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { authenticateAction } from "./redux/actions/authenticateAction";

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(authenticateAction.login(id, password));
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
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
      </div>
      <div className="login-form">
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div>
        <input className="login-button" type="submit" value="로그인"></input>
      </div>
    </form>
  );
};

export default Login;
