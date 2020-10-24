import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDealById} from '../../selectors/cars.js'
class HandleLoan extends Component{
constructor(props)
{
    super(props);

this.state = { 
    selectedFile: null,
    loanAmount:'',
    emi:0,
    
	}; 
}
	onFileChange = event => { 
	this.setState({ selectedFile: event.target.files[0] }); 
	}; 
	onFileUpload = () => { 
	const formData = new FormData(); 
	formData.append( 
		"myFile", 
		this.state.selectedFile, 
		this.state.selectedFile.name 
	); 
    console.log(this.state.selectedFile);
    console.log(this.props.data);
     
};
checkLoanAmount(e){
    this.setState({loanAmount:e.target.value});
        const value= e.target.value;
        if(this.props.data[0].loanAmount<value){
            alert("not eligible for that loan amount");
        }
}
emiCal(e){
    var time=e.target.value;
    var principal = this.state.loanAmount;
    var rate;
    if(time==24){
        rate=8/1200;
    }else if(time==36){
        rate=8.5/1200;
    }else if(time==48){
        rate=9/1200;
    }else{
        rate=9.5/1200;
    }
    var emi;
    var t1=Math.pow((1+rate),time);
    var t2=t1/(t1-1);
    //console.log(t1);
    //console.log(t2);
    emi=(principal*rate*t2).toFixed(2);
    {this.setState({emi:emi})};
    //console.log(emi);
}

fileData = () => { 
     
    if (this.state.selectedFile) { 
        
      return ( 
        <div> 
          <h2>File Details:</h2> 
          <p>File Name: {this.state.selectedFile.name}</p> 
          <p>File Type: {this.state.selectedFile.type}</p> 
          <p> 
            Last Modified:{" "} 
            {this.state.selectedFile.lastModifiedDate.toDateString()} 
          </p> 
        </div> 
      );
    } 
     else { 
      return ( 
        <div> 
          <h3>choose before pressing upload</h3>
          </div> 
      ); 
    } 

  }; 

render(){
    return(
    <div>
        <form onSubmit={e=>e.preventDefault()}>
                
    <h2>My Details</h2>
                <label>Name:</label>
                <input type="text" value={this.props.data[0].name} readOnly /><br/>                
                <label>Client Id :</label>
                <input type="text" value={this.props.data[0].clientId} readOnly /><br/>
                <label>Gender :</label>
                <input type="text" value={this.props.data[0].gender} readOnly /><br/>
                <label>Martial Status :</label>
                <input type="text" value={this.props.data[0].martialStatus} readOnly /><br/> 
                <label>Loan Amout you are eligible for :</label>
                <input type="number" name="quantity" value={this.props.data[0].loanAmount} readOnly /><br/>
                <label>Loan Amount :</label>
                <input type="number" name="quantity" onChange={(e)=>this.checkLoanAmount(e)}/><br/>
                
                <h3>Select Tenure</h3>
                <select onChange={(e)=>this.emiCal(e)}>
                    <option value="select in months">select in months</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                </select>
            <h3>EMI to be paid is {this.state.emi}</h3>
            <h3> 
			Upload scanned copy for your document for collateral 
			</h3> 
			<div> 
				<input type="file" onChange={this.onFileChange} /> 
				<button onClick={this.onFileUpload}> 
				Upload! 
				</button> 
			</div> 
		{this.fileData()}
    <button onClick={() =>alert("Your request has been submitted.Please wait for approval.")}>Submit my request to bank</button>
            
            
            </form>
            
    </div>
    )};
}
const mapStateToProps = (state,props) => {
    return {
    data :  state.UserData,
    //date1: getDealById(state.carDeals,props.match.params.id)
    }
}

export default connect(mapStateToProps)(HandleLoan);