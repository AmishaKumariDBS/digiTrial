import React from 'react';
import {connect} from 'react-redux';
import DealListItem from './DealListItem.jsx';
import selectCarDeals from '../../selectors/cars.js';
import {getCarDeals} from '../../services/carService';
import {setDeals} from '../../actions/cars/deals';

class CarDealsList extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        loading:true,
      }
    }
  
  componentDidMount(){
      
    getCarDeals().then((response) => {
      console.log("in response",response.data)
      this.setState(()=>({loading:false}));
      this.props.dispatch(setDeals(response.data));
    });
  }

render(){
  return (
    <div>
        {
        (this.state.loading===true)? (
          <div className="list-item list-item--message">
            <span>Loading</span>
          </div>
        ) :
          (this.props.deals.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Deals</span>
          </div>
        ) : (
            this.props.deals.map((deal) => {
              return <DealListItem key={deal.id} {...deal} />;
            })
          ))
        }
    </div>
);}
      }

const mapStateToProps = (state) => {
    return {
        deals : selectCarDeals(state.carDeals,state.carFilters)
    };
};

export default connect(mapStateToProps)(CarDealsList);