import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.less';

import Header from './Header';
import Home from "./Home";
import Calculator from './Calculator';
import Countdown from './Countdown';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/calculator' component={Calculator} />
            <Route exact path='/countdown' component={Countdown} />
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
