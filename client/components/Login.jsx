import React, { Component } from "react";

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
      <a href="">Join now</a>
    </div>
  );
}

export default Login;
