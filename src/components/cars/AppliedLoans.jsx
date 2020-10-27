import React, {Component} from 'react';
import {connect} from 'react-redux';
class AppliedLoan extends Component{
constructor(props)
{
    super(props);

this.state = { 
    }; 
 
}

render(){
    return(
        <div>        
    <h2>My Details</h2>
        Client ID: <p>{localStorage.getItem("ClientID")}</p>
        Car Cost :INR{this.props.data.carCost}
    <br />Loan Amount you have requested for : INR {this.props.data.loanAmount}<br/>
    You need to pay EMI INR {this.props.data.emi}<br />
    submitted document is {this.props.data.selectedFile.name}
                
    </div>
 )};
}
const mapStateToProps = (state) => {
    return {
    data :  state.UserData,
    
    }
}

export default connect(mapStateToProps)(AppliedLoan);