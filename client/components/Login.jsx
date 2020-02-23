import React, { Component } from "react";
import { Link } from "react-router-dom";

// function Login(props) {
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    console.log(evt.target.name + " " + evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value

      // [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(event) {
    alert(
      "A name and password was submitted: " +
        this.state.username +
        " " +
        this.state.password
    );
  }
  render() {
    return (
      <div className="login-register-input">
        <h1>StudyPal</h1>
        <p className="welcome">Welcome back!</p>
        <form onSubmit={this.handleSubmit} action="">
          <input
            className="text"
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            className="text"
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          <input className="button" type="submit" value="Submit" />
        </form>
        <a href="">Forgot password?</a>
        <br />
        <span>New to StudyPal?</span>
        <a href="">Join now</a>
      </div>
    );
  }

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
