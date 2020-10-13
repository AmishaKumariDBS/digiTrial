import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage.js';
import dashboard from '../components/dashboard.js';
import LoginPage from '../components/LoginPage.jsx';
import privatePath from '../components/privatePath.js';
import publicPath from '../components/publicPath.js';

export default class AppRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <publicPath restricted={false} component={HomePage} path="/" exact />
          <publicPath restricted={true} component={LoginPage} path="/signin" exact />
          <privatePath component={dashboard} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
