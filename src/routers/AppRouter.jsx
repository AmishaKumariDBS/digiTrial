import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/privatePath';
import PublicRoute from './components/publicPath';

export default class AppRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={HomePage} path="/" exact />
          <PublicRoute restricted={true} component={LoginPage} path="/signin" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
