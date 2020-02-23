import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";
// import Checkbox from
import "./stylesheets/styles.css";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login /> */}

        {/* <Register /> */}
        <Profile />
      </div>
    );
  }
}

export default App;
