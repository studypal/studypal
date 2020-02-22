import React, { Component } from "react";

function Login(props) {
  return (
    <div className="login">
      <h1>StudyPal</h1>
      <p>Welcome back!</p>
      <input type="text" placeholder="Username" />
      <br />
      <label htmlFor=""></label>{" "}
      <input type="password" placeholder="Password" />
      <br />
      <button>Sign in</button>
      <br />
      <a href="">Forgot password?</a>
      <br />
      <span>New to StudyPal?</span>
      <a href="">Join now</a>
    </div>
  );
}

export default Login;
