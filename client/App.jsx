import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//import relevant files
import ReactDOM from 'react-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Chat from './components/Chat.jsx';

// import Checkbox from
// import styles
import './stylesheets/styles.css';

const App = props => {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/msg" component={Chat} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
