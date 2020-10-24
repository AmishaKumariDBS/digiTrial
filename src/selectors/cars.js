export const getDealById = (carDeals,id) => {
    console.log("in selector",carDeals);
    return carDeals.filter((deal)=>deal.id==id)[0];
}



const filteredDeals =  (carDeals,carFilters) => {
    
    const modelSearch = (carDeal) =>{
        let found =false;
         carFilters.keywords.forEach((keyword)=>{
            if(carDeal.model.toLowerCase().includes(keyword.toLowerCase()) || carDeal.brand_name.toLowerCase().includes(keyword.toLowerCase()))
            found= true;
        });
        return found;
    }
    
        //console.log("in selector",carDeals);
      return carDeals.filter((carDeal)=>{

        return carDeal.price >= carFilters.minPrice && 
               carDeal.price <= carFilters.maxPrice && 
               carFilters.types.indexOf(carDeal.type)>-1 &&
               modelSearch(carDeal)
               ;
    });
}

export default filteredDeals;