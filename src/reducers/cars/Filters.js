const defaultFilters = {
    minPrice:500000,
    maxPrice:1000000,
    types:["SUV","Hatchback","Sedan","MUV","Minivan","Coupe","Hybrid","Luxury","Convertible","Pickup Truck","Wagon"],
    keywords:[""],
    sortBy:"price",
    order:1
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
        case 'SET_SORT':
            return{
                ...state,
                sortBy:action.sortBy
            }
        case 'SET_ORDER':
            return{
                ...state,
                order:action.order
            }
        default:
             return state;
    }
}