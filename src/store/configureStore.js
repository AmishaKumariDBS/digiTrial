import {createStore,combineReducers} from 'redux';
import carDealsReducer from '../reducers/cars/Deals.js';
import carFiltersReducer from '../reducers/cars/Filters.js';
import loginReducer from '../reducers/users/loginReducer.js'
//Store Creation
import User from '../data/user.js'
import applyLoanReducer from '../reducers/cars/ApplyLoan.js'
import userData from '../data/userData.js'
export default () => {
    const store = createStore(
        combineReducers({
            carDeals : carDealsReducer,
            carFilters : carFiltersReducer,
            loginData: loginReducer,
            UserData :applyLoanReducer
        }),
        {
            UserData:userData,
            loginData:User
        },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
