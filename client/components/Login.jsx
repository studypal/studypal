import React, { Component } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="login-register-input">
      <h1>StudyPal</h1>
      <p className="welcome">Welcome back!</p>
      <form action="">
        <input className="text" type="text" placeholder="Username" />
        <input className="text" type="password" placeholder="Password" />
        <input className="button" type="submit" value="Submit" />
      </form>
      <a href="">Forgot password?</a>
      <br />
      <span>New to StudyPal?</span>
      <Link to="/register">Join now</Link>
    </div>
  );
}

export default Login;
