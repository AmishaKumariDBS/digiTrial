import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage.js';
import Dashboard from '../components/Dashboard.js';
import LoginPage from '../components/LoginPage.jsx';
import {PrivatePath} from '../components/PrivatePath.js';
import {PublicPath } from '../components/PublicPath.js';

export default class AppRouter extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicPath restricted={false} component={HomePage} path="/" exact />
          <PublicPath restricted={true} component={LoginPage} path="/signin" exact />
          <PrivatePath component={Dashboard} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
