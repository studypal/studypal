import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
  }
  //{" "}
  //<input type="text" placeholder="Interests" />
  render() {
    let checkboxes = [];
    const interest = ["Math", "Art", "Science"];
    for (let i = 0; i < interest.length; i++) {
      checkboxes.push(
        <span className="checkbox">
          <input
            className="checkbox"
            type="checkbox"
            value={interest[i]}
            id={interest[i]}
          />
          <label>{interest[i]}</label>
        </span>
      );
    }

    return (
      <form action="" className="login-register-input">
        <h1>Register</h1>
        <input className="text" type="text" placeholder="Username" />
        <input className="text" type="text" placeholder="First Name" />
        <input className="text" type="text" placeholder="Last Name" />
        <input className="text" type="email" placeholder="Email" />
        <input className="text" type="text" placeholder="School" />
        {checkboxes}
        <input type="submit" />
      </form>
    );
  }
}

export default Register;
