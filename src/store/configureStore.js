import {createStore,combineReducers} from 'redux';
import carDealsReducer from '../reducers/cars/Deals.js';
import carFiltersReducer from '../reducers/cars/Filters.js';

//Store Creation

export default () => {
    const store = createStore(
        combineReducers({
            carDeals : carDealsReducer,
            carFilters : carFiltersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
