import React from 'react';
import {login} from './auth';

const LoginPage = (props) => {

    const handleLogin = () => {
        login();
        props.history.push('/dashboard');
    }

    return (
        <div>
            <h1>Kindly Log In</h1>

            <button onClick={() => handleLogin()}>Click here to log in</button>
        </div>
    );
};

export default LoginPage;