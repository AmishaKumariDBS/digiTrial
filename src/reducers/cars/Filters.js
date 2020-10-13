const defaultFilters = {
    minPrice:500000,
    maxPrice:1000000,
    types:["SUV","Hatchback","Sedan"],
    keywords:[""]
};

export default (state=defaultFilters,action) => {
    switch(action.type){
        case 'SET_BUDGET':
            return{
                ...state,
                minPrice:action.minPrice,
                maxPrice:action.maxPrice
            }
        case 'SET_BODY_TYPE':
            return{
                ...state,
                types:action.types
            }
            case 'SET_SEARCH':
                return{
                    ...state,
                    keywords:action.keywords
                }
        default:
             return state;
    }
}