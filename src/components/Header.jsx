import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from './Auth.js';
import {history} from '../routers/AppRouter.jsx';

export default (props) =>{ 
    
    const handleLogout = () => {
        logout();
        window.location.reload(false);
    }
    
    return (
    <header>
            <div style ={{display:"flex", flexDirection:"row", gap:"250px"}}>
            
                <Link className="header__title" to="/homepage">
                    <h1>Digital Bank</h1>
                </Link>
                <Link to="/profile">
                    <h3>Profile</h3>
                </Link>
                <button style={{height:"40px",width: "60px"}} onClick={() => handleLogout()}>Logout</button>
            </div>
       
    </header>
);
}