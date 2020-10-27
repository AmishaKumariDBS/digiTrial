import React from 'react'
import {connect} from 'react-redux';
import {login} from './Auth';
import {loginById} from '../actions/users';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clientId:''
        };
        this.onClickLoginButton=this.onClickLoginButton.bind(this);
        this.updateClientId=this.updateClientId.bind(this);
     }
    
    updateClientId(e){
        this.setState({clientId:e.target.value});
        console.log(`user:${this.state.clientId}`);
    }
    updatePassword(e){
        this.setState({password:e.target.value});
        console.log(`passw: ${this.state.password}`);
    }
    onClickLogin(){
        if(this.state.clientId){
            let clientVar=this.state.clientId;
            this.props.userLogin(clientVar);
            this.props.history.push('/homepage');
        }
    }

    onClickLoginButton(){
        if(this.state.clientId){
            console.log(this.state.clientId);
            let clientVar=this.state.clientId;
            if(clientVar<200){
            let flag=true;
            for(let i=0;i<this.props.userData.length;i++){
                if(this.props.userData[i].clientId == clientVar){
                    console.log("Success"); 
                    alert(`Welcome ${clientVar}`);
                    login(this.state.clientId);
                    this.props.history.push('/homepage');
                    flag=!flag;
                    break;
               }
            }
            if(flag){
                alert("Enter correct");
                console.log("NOT");
            }
        }
        else if(clientVar>=200 && clientVar<300){
            //Login for Dealer
            this.props.history.push("/dealer");
        }
        else if(clientVar>=300 && clientVar<400){
            //Login for Admin
            this.props.history.push("/admin");
        }


        }
        else{
            console.log("input field is empty");
            this.props.history.push("/login");
        }
    }

    // onClickSetPasswordButton(){
        
    //     //redirect to set password page
    //     this.props.history.push('./setpassword');
    // }
    // onClickForgotPasswordButton(){
    //     //redirect to forgot password page
    //     this.props.history.push('./forgotpassword');

    // }

    render(){
        return(
            <div>
                <div style={{backgroundColor:"red",color:"white", border:"solid",width:"30%", textAlign:"center",borderBlock:"black",transform:"translateX(160%)",marginTop:"6%"}}>
                <p>Dear {localStorage.getItem("roleName")} please enter your ID to login </p><br/>
                <p>{localStorage.getItem("roleName")} ID: </p><input style={{ marginTop:"20%",marginBottom:"5%"}} type="text" onChange={this.updateClientId} /><br/>
                {/* Password: <input style={{ marginTop:"5%",marginBottom:"5%"}} type="password" onChange={this.updatePassword}/><br/> */}
                <button style={{ backgroundColor:"red",color:"white",marginTop:"5%",marginBottom:"20%",paddingRight:"7%",paddingLeft:"7%"}} id="loginButton" onClick={()=>{this.onClickLogin()}}>Login</button>
                {/* <p>Logging in for the first time?</p> */}
                {/* <button id="setPassword" onClick={this.onClickSetPasswordButton} style={{backgroundColor:"red",color:"white", marginBottom:"5%"}}>Set Password</button><br/> */}
                {/* <button style={{ backgroundColor:"red",color:"white",transform:"translateX(70%)",marginBottom:"5%",marginTop:"5%"}} onClick={this.onClickForgotPasswordButton}>Forgot Password?</button> */}
                {/* <h1>Client ID: {this.state.clientId}</h1>
                <h1>Password: {this.state.password}</h1> */}
                </div>
                
            </div>
        );
    }
}

const  mapStateToProps = (state) =>{
    return{
      userData:state.loginData
    };
  }

  const mapDispatchToProps = (dispatch) => {
      return {
        userLogin : (id) => dispatch(loginById(id))
      }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login);