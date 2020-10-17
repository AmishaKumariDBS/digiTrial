import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './Auth';

const PrivatePath = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivatePath;