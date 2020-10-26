import React from 'react'
import {connect} from 'react-redux';

class Profile extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     clientId:'',
        // };
        // this.onClickLoginButton=this.onClickLoginButton.bind(this);
        // this.updateClientId=this.updateClientId.bind(this);
     }
    
    // updateClientId(e){
    //     this.setState({clientId:e.target.value});
    //     console.log(`user:${this.state.clientId}`);
    // }
    // updatePassword(e){
    //     this.setState({password:e.target.value});
    //     console.log(`passw: ${this.state.password}`);
    // }

    // onClickLoginButton(){
    //     if(this.state.clientId){
    //         console.log(this.state.clientId);
    //         // console.log(this.state.password);
    //         let clientVar=this.state.clientId;
    //         // let passwordVar=this.state.password;

    //         let flag=true;
    //         for(let i=0;i<this.props.userData.length;i++){
    //             if(this.props.userData[i].clientId == clientVar){
    //                 console.log("Success"); 
    //                 localStorage.setItem("clientId",clientVar);
    //                 let a=localStorage.getItem("clientId");
    //                 console.log(`local item: ${a}`);
    //                 alert(`Welcome ${clientVar}`);
    //                 //Send the login data to the local storage
    //                 flag=!flag;
    //                 break;
    //            }
    //         }
    //         if(flag){
    //             alert("Enter correct");
    //             console.log("NOT");
    //         }
    //         // this.props.userData.forEach((user)=>{
    //         //     console.log(`user.clid:${user.clientId}`);
    //         //     console.log(`user.pwd:${user.password}`);
    //         //     if(user.clientId == clientVar && user.password == passwordVar){
    //         //         console.log("Sucess");
    //         //         flag=!flag;
    //         //         break;
    //         //     }
    //         // });
    //         // if(flag){
    //         //     console.log("Not Success");
    //         //     this.props.history.push("/");
    //         // }


            
    //         // if(props.userData){
    //         //     alert("Login Successful");
    //         // }
    //         // else{
    //         //     alert("Login Not Successful");
    //         // }

    //     }
    //     else{
    //         console.log("input field is empty");
    //         this.props.history.push("/");
    //     }
    // }

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
        Client ID: <p>{localStorage.getItem("clientId")}</p>
        Email ID : <p>{localStorage.getItem("emailId")}</p>
        Mobile No : <p>{localStorage.getItem("mobileNo")}</p>
        Loan Category : <p>{localStorage.getItem("loanCategory")}</p>
        Eligible Loan Amount : <p>{localStorage.getItem("eligibleLoanAmount")}</p>
                {/* Password: <input style={{ marginTop:"5%",marginBottom:"5%"}} type="password" onChange={this.updatePassword}/><br/> */}
                {/* <button style={{ backgroundColor:"red",color:"white",marginTop:"5%",marginBottom:"20%",paddingRight:"7%",paddingLeft:"7%"}} id="loginButton" onClick={this.onClickLoginButton}>Login</button> */}
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
  
  export default connect(mapStateToProps)(Profile);


{/* <input style={{ marginTop:"20%",marginBottom:"5%"}} type="text" onChange={this.updateClientId} /><br/>   */}