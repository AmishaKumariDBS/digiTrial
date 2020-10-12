export const setBudget = (min,max) => ({
    type:'SET_BUDGET',
    minPrice:min,
    maxPrice:max
})

export const setBodyType = (types) => ({
    type:'SET_BODY_TYPE',
    types
})
