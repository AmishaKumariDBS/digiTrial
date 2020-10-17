import React from 'react';
import CarsDealsList from './cars/DealsList.jsx';
import CarFilters from './cars/DealsListFilters.jsx';
import {Link, Router} from "react-router-dom";
import {logout, isLogin} from './Auth.js';
import AppRouter from '../routers/AppRouter.jsx';
import LoginPage from "./LoginPage.jsx";
import PublicPath from "./PublicPath.js"

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state ={isLogin: isLogin()}
    }
    handleLogout = () =>{
        logout();
        this.setState({
            isLogin: false
        })
    }
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <div style = {{display:"flex", flexDirection:"row", gap:"50px"}}>
        <CarFilters />
        <CarsDealsList />
        
        </div>
        {this.state.isLogin ?
                <button onClick={() =>this.handleLogout()}>Logout</button>    
           :<Link to="/signin"> Signin</Link>
           
           
           }
            </div>
        );
    }
}


export default HomePage;