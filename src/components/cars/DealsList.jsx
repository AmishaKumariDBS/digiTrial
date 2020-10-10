import React from 'react';
import {connect} from 'react-redux';
import DealListItem from './DealListItem.jsx';
import selectCarDeals from '../../selectors/cars.js';

export const CarDealsList = (props) => (
    <div>
        {
        props.deals.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Deals</span>
          </div>
        ) : (
            props.deals.map((deal) => {
              return <DealListItem key={deal.id} {...deal} />;
            })
          )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        deals : selectCarDeals(state.carDeals,state.carFilters)
    };
};

export default connect(mapStateToProps)(CarDealsList);