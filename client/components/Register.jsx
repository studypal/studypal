import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let checkboxes = [];
    const interest = [
      "Computer Science",
      "Communications",
      "Political Sciences",
      "Business",
      "Liberal Arts",
      "Physics",
      "Nursing",
      "Engineer"
    ];
    // const breaks = [4, 8, 12, 16];
    for (let i = 0; i < interest.length; i++) {
      // if (i < 6) {
      checkboxes.push(
        <div className="interestCol">
          <span className="checkbox">
            <input type="checkbox" value={interest[i]} id={interest[i]} />
            <label>{interest[i]}</label>
          </span>
        </div>
      );
      // }
    }

    return (
      <div className="login-register-input">
        <form action="">
          <h1>Create Account</h1>
          <input className="text" type="text" placeholder="Username" />
          <input className="text" type="text" placeholder="First Name" />
          <input className="text" type="text" placeholder="Last Name" />
          <input className="text" type="email" placeholder="Email" />
          <input className="text" type="password" placeholder="Password" />
          <input className="text" type="text" placeholder="School" />
          {checkboxes}
          <br />
          <p>
            I agree all statements in <a href="">Term of service.</a>
          </p>
          <input className="button" type="submit" />
        </form>
      </div>
    );
  }
}

export default Register;
