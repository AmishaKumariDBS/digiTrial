import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage.js';
import dashboard from '../components/Dashboard.js';
import LoginPage from '../components/LoginPage.jsx';
import {privatePath} from '../components/PrivatePath.js';
import {publicPath } from '../components/PublicPath.js';

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
