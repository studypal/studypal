import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

//import relevant files
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

import Profile from "./components/Profile.jsx";
=======



// import Checkbox from
// import styles
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

const App = props => {
  return (
    <div className="router">
    <main>
      <Switch>
        <Route
          exact path="/"
          component={Login}
        />
        <Route
          exact path="/register"
          component={Register}
        />
      </Switch>
    </main>
  </div>
  );
}



export default App;
