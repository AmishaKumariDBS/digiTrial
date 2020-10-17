import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../components/Auth';
import Header from '../components/Header.jsx';

const PrivatePath = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
            <div>
                <Header />
                <Component {...props} />
                </div>
            : <Redirect to="/" />
        )} />
    );
};

export default PrivatePath;