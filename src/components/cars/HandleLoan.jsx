import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDealById} from '../../selectors/cars.js'
import {DealDetails} from './DealDetails.jsx';
import {getCarDeals} from '../../services/carService';
import {setDeals} from '../../actions/cars/deals';
import {appliedLoans} from '../../actions/Loan';
class HandleLoan extends Component{
constructor(props)
{
    super(props);

this.state = { 
    selectedFile: null,
    loading:true,
    time:24,
    loanAmountdisplay:0,
    loanAmount_request:0,
    emi:0,
    }; 
 
}
componentDidMount(){
      
    getCarDeals().then((response) => {
      console.log("in response",response.data)
      this.props.dispatch(setDeals(response.data));
      this.setState(()=>({loading:false}));
      
    });
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

eligible(time){
    var p1,rate;
    if(time==24){
        rate=8/1200;
    }else if(time==36){
        rate=8.5/1200;
    }else if(time==48){
        rate=9/1200;
    }else{
        rate=9.5/1200;
    }
var emi = this.props.data[0].eligibleemi;
var t1=Math.pow((1+rate),time);
var t2=(t1-1)/t1;

p1=(emi*t2)/rate;
return p1;

}
loan(e){
var val = e.target.value;
if(val>this.state.loanAmountdisplay){
alert("you are enetering more than eligibility");
}else{
    this.emiCal(e);

} 
}

emiCal(e){
    var principal=e.target.value;
    this.setState({loanAmount_request:principal})
    var time=this.state.time;
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
    emi=(principal*rate*t2).toFixed(2);
    {this.setState({emi:emi})};
    console.log("emifinal ",emi);
   
}

/*loanCal(e){
    var time=e.target.value;
    var loanAmount=0;
    var emi = this.props.data[0].eligibleemi;
    if(time==24){
        loanAmount=emi*24;
    }else if(time==36){
        loanAmount=emi*36;
    }else if (time==48){
        loanAmount=emi*48;
    }else{
        loanAmount=emi*60;
    }
    {this.setState({loanAmount:loanAmount})};
    console.log(loanAmount);
    console.log(this.props.CarData);
    this.emiCal(e);
}*/
updatetime(e){
    var time=e.target.value;
    {this.setState({time:time})};
    console.log(time);

    var principal = 0.8*this.props.CarData.price;

    var eligibleamount = this.eligible(time);
    console.log("principal" ,principal);
    console.log("eligible",eligibleamount);
    if(principal<eligibleamount){
        this.setState({loanAmountdisplay:principal});
    }else{
         this.setState({loanAmountdisplay:eligibleamount});
    }   
    console.log(this.state.loanAmountdisplay);
}

onApply(){
    var clientId=this.props.data[0].id;

    var emi=this.state.emi;
    this.setState({emi:emi});
    //console.log("my emi is ",emi);
    var loanAmount=this.state.loanAmount_request;
    this.setState({loanAmount:loanAmount});
    var carCost=this.props.CarData.price;
    this.setState({carCost:carCost});
    var selectedFile=this.state.selectedFile;
    this.setState({selectedFile:selectedFile});
    this.props.dispatch(appliedLoans(clientId,loanAmount,emi,carCost,selectedFile));
    this.props.history.push(`/appliedloan`);

 
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
        {
            (this.state.loading===true)? (
                <div className="list-item list-item--message">
                  <span>Loading</span>
                </div>
              ) :
               

        (<form onSubmit={e=>e.preventDefault()}>
                
    <h2>My Details</h2>
                <label>Name:</label>
                <input type="text" value={this.props.data[0].name} readOnly /><br/>                
                <label>Client Id :</label>
                <input type="text" value={this.props.data[0].clientId} readOnly /><br/>
                <label>Gender :</label>
                <input type="text" value={this.props.data[0].gender} readOnly /><br/>
                <label>Martial Status :</label>
                <input type="text" value={this.props.data[0].martialStatus} readOnly /><br/> 
                <label>Eligible Emi</label>
                <input type="text" value={this.props.data[0].eligibleemi} readOnly />
                <h2>U selected {this.props.CarData.brand_name} <br />
                {this.props.CarData.model}<br />
                INR {this.props.CarData.price} <br />
                from {this.props.CarData.dealer_name}</h2>
               
                <h3>Select Tenure</h3>
                <select onChange={(e)=>this.updatetime(e)} required>
                    <option value="select time">select</option>
                    <option value="24">24 months</option>
                    <option value="36">36 months</option>
                    <option value="48">48 months</option>
                    <option value="60">60 months</option>
                </select>
              <h2>your loan amount eleigibility is INR {this.state.loanAmountdisplay.toFixed(2)}</h2>
              <label>Enter your Loan Amount :</label>
                <input type="number" name="quantity" onChange={(e)=>this.loan(e)} required/><br></br>
                <h2>U need to pay EMI INR {this.state.emi}</h2>
            <h2>For your car to buy, bank will provide loan of INR {this.state.loanAmount_request} and you ned to pay INR {this.props.CarData.price-this.state.loanAmount_request}</h2>
            <h3> 
			Upload scanned copy for your document :
			</h3> 
			<div> 
				<input type="file" onChange={this.onFileChange} required/> 
				<button onClick={this.onFileUpload}> 
				Upload! 
				</button> 
			</div> 
		{this.fileData()}
    <button type="submit" onClick={()=>this.onApply()} >Submit my request to bank</button>
    </form>
        )  }
    </div>
 )};
}
const mapStateToProps = (state,props) => {
    return {
    data :  state.UserData,
    CarData: getDealById(state.carDeals,props.match.params.id)
    }
}

export default connect(mapStateToProps)(HandleLoan);