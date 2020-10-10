const defaultFilters = {
    minPrice:500000,
    maxPrice:1000000
};

export default (state=defaultFilters,action) => {
    switch(action.type){
        case 'SET_BUDGET':
            return{
                ...state,
                minPrice:action.minPrice,
                maxPrice:action.maxPrice
            }
        default:
             return state;
    }
}