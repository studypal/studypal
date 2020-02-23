import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Error from './components/Error.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/*  need to put login component so that on / it would go to login*/}
            {/* <Route path="/" component={} exact />
      <Route path="/users" component={} />
      <Route path="/msg" component={} />
      <Route path="/register" component={} />*/}
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
