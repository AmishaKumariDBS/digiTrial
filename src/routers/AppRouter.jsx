import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
import HomePage from '../components/HomePage.js'
import DealDetails from '../components/cars/DealDetails.jsx';
import Dashboard from '../components/Dashboard.js';
import PrivatePath from '../components/PrivatePath.js';
import PublicPath  from '../components/PublicPath.js';

const AppRouter = () => (
        
            <BrowserRouter>
            <div>
                {/*<Link to="/">Login</Link>*/}
                <Link to="/cars">Cars</Link>
                {/* <Link to="/cars/12">Login</Link> */}
            <Switch>
                {/*<Route path='/' component={LoginPage} exact={true}/> 
                <Route path="/cars" component={HomePage} exact={true}/>*/}
                <Route path="/cars/:id" component={DealDetails} />
                <PublicPath restricted={false} component={HomePage} path="/" exact />
                <PublicPath restricted={true} component={LoginPage} path="/signin" exact />
                <PrivatePath component={Dashboard} path="/dashboard" exact />
            </Switch>
           
        </div>
        </BrowserRouter>
    )
export default AppRouter;



