import React from 'react';
import CarsDealsList from './cars/DealsList.jsx';
import CarFilters from './cars/DealsListFilters.jsx';
import {NavLink, Router} from "react-router-dom";
import {logout, isLogin} from './Auth.js';
import AppRouter from '../routers/AppRouter.jsx';
import LoginPage from "./LoginPage.jsx";
import publicPath from "./PublicPath.js"

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state ={isLogin: isLogin()}
    }
    handleLogout = () =>{
        logout();
        this.setStates({
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
        <AppRouter/>
        </div>
        {this.state.isLogin ?
                <button onClick={() =>this.handleLogout()}>Logout</button>    
           :<div><NavLink to="/signin"> Signin</NavLink>
           <Router restricted={true} component={LoginPage} path="/signin" exact />
           
           </div> }
            </div>
        );
    }
}
//const HomePage = () => (
 //   <div >
   //     <h1>Home Page</h1> <br/>
     //   <div style = {{display:"flex", flexDirection:"row", gap:"50px"}}>
       // <CarFilters />
        //<CarsDealsList />
       // </div>
    //</div>
//);

export default HomePage;