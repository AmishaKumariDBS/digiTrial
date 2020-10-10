export default (carDeals,carFilters) => {
    
    return carDeals.filter((carDeal)=>{
        return carDeal.price >= carFilters.minPrice && carDeal.price <= carFilters.maxPrice;
    });
}