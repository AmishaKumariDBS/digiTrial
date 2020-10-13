import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import LoginPage from '../components/LoginPage.jsx';
import HomePage from '../components/HomePage.js'
import DealDetails from '../components/cars/DealDetails.jsx'

const AppRouter = () => (
        
            <BrowserRouter>
            <div>
                <Link to="/">Login</Link>
                <Link to="/cars">Cars</Link>
                <Link to="/cars/12">Login</Link>
            <Switch>
                <Route path='/' component={LoginPage} exact={true}/>
                <Route path="/cars" component={HomePage} exact={true}/>
                <Route path="/cars/:id" component={DealDetails} />
            </Switch>
           
        </div>
        </BrowserRouter>
    )
export default AppRouter;