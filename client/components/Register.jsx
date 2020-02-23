import React, { Component } from "react";
import Checkbox from "./Checkbox.jsx";
// try to import instead of require
// var Checkbox = require('rc-checkbox');
// import CheckboxesGroup from "Checkbox.jsx";

class Register extends Component {
  constructor(props) {
    super(props);
  }
  //{" "}
  //<input type="text" placeholder="Interests" />
  render() {
    return (
      <div>
        <p>Register Form</p>
        <input type="text" placeholder="Username" />
        <br />
        <span>
          <input type="text" placeholder="First Name" />
        </span>
        <br />
        <span>
          <input type="text" placeholder="Last Name" />
        </span>
        <br />

        <input type="email" placeholder="Email" />
        <br />
        <input type="text" placeholder="School" />
        <br />
        <Checkbox />

        <br />
        <button>Submit</button>
      </div>
    );
  }
}

export default Register;
