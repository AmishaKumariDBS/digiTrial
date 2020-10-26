import React,{useRef, useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {getDealById} from '../../selectors/cars.js';
import {getCarDeals} from '../../services/carService';
import {setDeals} from '../../actions/cars/deals';

const scrollToRef=(ref)=>window.scrollTo(0,ref.current.offsetTop);
const scrollToTop = () => window.scrollTo(0,0);
const useMountEffect = (fun) => useEffect(fun,[]);


const CarDealDetails = (props) => {
    const [loading,setState] = useState(true);
    useEffect(() => {
        getCarDeals().then((response) => {
            console.log("in response",response.data)
            console.log("after set state",props);
            props.dispatch(setDeals(response.data));
            setState(false);
          });
      }, []);

    const headerref = useRef(null);
    const featuresref = useRef(null);
    const loanref = useRef(null);
    const dealerref = useRef(null);
    useMountEffect(()=>scrollToTop());
    const handleLoan = () => {
        props.history.push('/loanpage')
    }

    
    console.log(props.data);
    console.log("27",props,loading);
    return (
        <div>
        {
            (loading===true)? (
              <div className="list-item list-item--message">
                <span>Loading</span>
              </div>
            ) :
            (<div ref={headerref} id="headerDetails" style = {{display:"flex", flexDirection:"row",gap:"50px",height:300}}>
                <div id="imageDiv" style = {{width:"30%"}}>
                    <img src={require(`../../images/${props.data.image}`).default} alt="deal image"/>
                </div>
                <div >
                <h3>{props.data.brand_name}</h3>
                <h4>{props.data.car_name}</h4>
                <p>INR  {props.data.price}</p>
                <p>{props.data.dealer_name}</p>
                <button onClick={()=>handleLoan()}>Apply for loan</button>
            </div>
            </div>
            )}
            <div>
                <div  id="topicsDiv" style={{float:"left",width:"25%",position:"fixed"}}>
                    <div style={{cursor:"pointer"}} onClick={()=>scrollToRef(featuresref)}>Features & Specs</div>
                    <div style={{cursor:"pointer"}} onClick={()=>scrollToRef(loanref)}>Loan Information</div>
                    <div style={{cursor:"pointer"}} onClick={()=>scrollToRef(dealerref)}>About Dealer</div>
                    <div style={{cursor:"pointer"}} onClick={()=>scrollToTop()}>Go to top</div>
                </div>
                <div id="detailsDiv" style={{float:"right",width:"70%"}}>
                    <div ref={featuresref}>Feature:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec fermentum lectus. Ut sit amet elit nulla. Mauris malesuada mauris posuere ipsum faucibus efficitur. Vestibulum ultricies id metus et malesuada. Morbi eget lacus faucibus, suscipit velit at, lacinia metus. Maecenas commodo tortor ac metus pretium dictum. Nulla vestibulum at enim non volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                    <div style={{height:400}}></div>
                    <div ref={loanref}>Loan:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec fermentum lectus. Ut sit amet elit nulla. Mauris malesuada mauris posuere ipsum faucibus efficitur. Vestibulum ultricies id metus et malesuada. Morbi eget lacus faucibus, suscipit velit at, lacinia metus. Maecenas commodo tortor ac metus pretium dictum. Nulla vestibulum at enim non volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
                    <div style={{height:400}}></div>
                    <div ref={dealerref}>Dealer:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec fermentum lectus. Ut sit amet elit nulla. Mauris malesuada mauris posuere ipsum faucibus efficitur. Vestibulum ultricies id metus et malesuada. Morbi eget lacus faucibus, suscipit velit at, lacinia metus. Maecenas commodo tortor ac metus pretium dictum. Nulla vestibulum at enim non volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>

                </div>
            </div>
        </div>
     );
}



const mapStateToProps = (state,props) => {
    return {
    data :  getDealById(state.carDeals,props.match.params.id)
    }
}

export default connect(mapStateToProps)(CarDealDetails);