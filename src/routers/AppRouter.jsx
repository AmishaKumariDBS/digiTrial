import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import LoginPage from '../components/LoginPage.jsx';
import HomePage from '../components/HomePage.js'
import DealDetails from '../components/cars/DealDetails.jsx';
import PrivatePath from './PrivatePath.js';
import PublicPath  from './PublicPath.js';
import NotFoundPage from '../components/NotFoundPage';

export const history = createBrowserHistory();

const AppRouter = () => (
        
            <BrowserRouter  history={history}>
            <div>
                {/*<Link to="/">Login</Link>*/}
                {/* <Link to="/cars/12">Login</Link> */}
            <Switch>
                {/*<Route path='/' component={LoginPage} exact={true}/>*/}
                <PrivatePath path="/homepage" component={HomePage} exact={true}/>
                <PrivatePath path="/cars/:id" component={DealDetails} />
                {/*<PublicPath restricted={false} component={HomePage} path="/" exact />*/}
                <PublicPath component={LoginPage} path="/" exact /> 
                <Route component={NotFoundPage} />
            </Switch>
           
        </div>
        </BrowserRouter>
    )
export default AppRouter;



