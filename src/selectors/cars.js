export default (carDeals,carFilters) => {
    
    const modelSearch = (carDeal) =>{
        let found =false;
         carFilters.keywords.forEach((keyword)=>{
            if(carDeal.model.toLowerCase().includes(keyword.toLowerCase()))
            found= true;
        });
        return found;
    }

    return carDeals.filter((carDeal)=>{

        return carDeal.price >= carFilters.minPrice && 
               carDeal.price <= carFilters.maxPrice && 
               carFilters.types.indexOf(carDeal.type)>-1 &&
               modelSearch(carDeal)
               ;
    });
}