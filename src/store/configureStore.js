import {createStore,combineReducers} from 'redux';
import carDealsReducer from '../reducers/cars/Deals.js';
import carFiltersReducer from '../reducers/cars/Filters.js';
//Store Creation
import applyLoanReducer from '../reducers/cars/ApplyLoan.js'
import userData from '../data/UserData.js'
export default () => {
    const store = createStore(
        combineReducers({
            carDeals : carDealsReducer,
            carFilters : carFiltersReducer,
            UserData :applyLoanReducer
        }),
        {
            
            UserData:userData
        },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
