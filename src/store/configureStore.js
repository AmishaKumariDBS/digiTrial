import {createStore,combineReducers} from 'redux';
import carDealsReducer from '../reducers/cars/Deals.js';
import carFiltersReducer from '../reducers/cars/Filters.js';
import carDealsData from '../data/CarDeals.js'
import userData from '../data/UserData.js'
import applyLoanReducer from '../reducers/cars/ApplyLoan.js'
//Store Creation

export default () => {
    const store = createStore(
        combineReducers({
            carDeals : carDealsReducer,
            carFilters : carFiltersReducer,
            UserData :applyLoanReducer
        }),
        {
            carDeals:carDealsData,
            UserData:userData
        },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
