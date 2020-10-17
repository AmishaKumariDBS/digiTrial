import React,{useRef} from 'react';
import {connect} from 'react-redux';
import {getDealById} from '../../selectors/cars.js'

const scrollToRef=(ref)=>window.scrollTo(0,ref.current.offsetTop);
const CarDealDetails = (props) => {
    const featuresref = useRef(null);
    const loanref = useRef(null);
    const dealerref = useRef(null);
    console.log(props.data);
    return (
        <div>
            <div id="headerDetails" style = {{display:"flex", flexDirection:"row",gap:"50px",height:300}}>
                <div id="imageDiv" style = {{width:"30%"}}>
                    <img src={props.data.image} alt="deal image"/>
                </div>
                <div >
                <h3>{props.data.brandname}</h3>
                <h4>{props.data.model}</h4>
                <p>{props.data.currency}  {props.data.price}</p>
                <p>{props.data.dealername}</p>
                </div>
           
            </div>
            <div>
                <div id="topicsDiv" style={{float:"left",width:"25%",position:"fixed"}}>
                    <div style={{cursor:"pointer"}} onClick={()=>scrollToRef(featuresref)}>Features & Specs</div>
                    <div style={{cursor:"pointer"}} onClick={()=>scrollToRef(loanref)}>Loan Information</div>
                    <div style={{cursor:"pointer"}} onClick={()=>scrollToRef(dealerref)}>About Dealer</div>
                </div>
                <div id="detailsDiv" style={{float:"right",width:"70%"}}>
                    <div style={{height:100}}></div>
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