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
        Client ID: <p>{JSON.parse(localStorage.getItem('clientDetails')).customerId}</p><br/>
    
       {  
        this.props.data.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No Applied Loans</span>
      </div>
    ): (this.props.data.map((loan)=>(<div>
        Car Cost :INR{loan.carCost} <br />
        Loan Tenure Period :{loan.time} Months
    <br />Loan Amount you have requested for : INR {loan.loanAmount}<br/>
    You need to pay EMI INR {loan.emi}<br />
    submitted document is {loan.selectedFile.name}
    <br/><br/><br/>
    </div>)))
       }
    </div>
 )};
}
const mapStateToProps = (state) => {
    return {
    data :  state.loanData,
    
    }
}

export default connect(mapStateToProps)(AppliedLoan);