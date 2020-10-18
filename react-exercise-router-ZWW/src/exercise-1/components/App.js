import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import AboutUs from './pages/AboutUs';
import Header from './pages/Header';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/myProfile' component={MyProfile} />
            <Route exact path='/aboutUs' component={AboutUs} />
            <Redirect from='/goods' to='/products' />
            <Route exact path='/products' component={Products} />
            <Route exact path='/products/:id(\d+)' component={ProductDetail} />
            <Route exact path='/' component={Home} />
            <Redirect from='/**' to='/' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
