import React from 'react';
import {connect} from 'react-redux';
import DealListItem from './DealListItem.jsx';
import selectCarDeals from '../../selectors/cars.js';
import {getCarDeals} from '../../services/carService';
import {setDeals} from '../../actions/cars/deals';
import {Pagination} from '@material-ui/lab';

class CarDealsList extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        loading:true,
        currentPage:1,
        dealsPerPage:5
      }
    }
  
  componentWillMount(){
      
    getCarDeals().then((response) => {
      console.log("in response",response.data)
      this.props.dispatch(setDeals(response.data));
      this.setState(()=>({loading:false}));
      
    });
  }

  UNSAFE_componentWillReceiveProps(){
    this.setState({currentPage:this.props.filters.page});
  }

  onPageChange(e,page){
    this.setState({currentPage:page});
    window.scrollTo(0,0);
  }

render(){

  const indexOfLastDeal = this.state.currentPage * this.state.dealsPerPage;
  const indexOfFirstDeal = indexOfLastDeal - this.state.dealsPerPage;
  const currentDeals = this.props.deals.slice(indexOfFirstDeal,indexOfLastDeal);

  

  return (
    <div>
        {
        (this.state.loading===true)? (
          <div className="list-item list-item--message">
            <span>Loading</span>
          </div>
        ) :
          ( 
            this.props.deals.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Deals</span>
          </div>
        ) : (
          <div>
          <Pagination count={parseInt((this.props.deals.length%this.state.dealsPerPage==0)?
                                      this.props.deals.length/this.state.dealsPerPage:
                                      this.props.deals.length/this.state.dealsPerPage+1
            )}  
           onChange = {(e,page)=>this.onPageChange(e,page)}
           page={this.state.currentPage}
           color="secondary"
           />
          
            {currentDeals.map((deal) => {
              return <DealListItem key={deal.id} {...deal} />;
            })}
          </div>
          ))
        }
        <Pagination count={parseInt((this.props.deals.length%this.state.dealsPerPage==0)?
                                    this.props.deals.length/this.state.dealsPerPage:
                                    this.props.deals.length/this.state.dealsPerPage+1
          )}  
          onChange = {(e,page)=>this.onPageChange(e,page)}
          page={this.state.currentPage}
          color="secondary"
          />
    </div>
);}
      }

const mapStateToProps = (state) => {
    return {
        deals : selectCarDeals(state.carDeals,state.carFilters),
        filters:state.carFilters
    };
};

export default connect(mapStateToProps)(CarDealsList);