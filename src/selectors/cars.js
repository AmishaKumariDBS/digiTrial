export const getDealById = (carDeals,id) => {
    console.log("in selector",carDeals);
    return carDeals.filter((deal)=>deal.id==id)[0];
}



const filteredDeals =  (carDeals,carFilters) => {
    
    const modelSearch = (carDeal) =>{
        let found =false;
         carFilters.keywords.forEach((keyword)=>{
            if(carDeal.car_name.toLowerCase().includes(keyword.toLowerCase()))
            found= true;
        });
        return found;
    }
    
        console.log("in selector",carDeals);
       return carDeals.filter((carDeal)=>{
    //             console.log("inside filter",carDeal.price >= carFilters.minPrice && 
    //             carDeal.price <= carFilters.maxPrice && 
    //             carFilters.types.indexOf(carDeal.type)>-1 &&
    //             modelSearch(carDeal));
               // console.log("car price="+carDeal.price+"car type"+carDeal.type);
               console.log("image="+carDeal.image+" ID = "+carDeal.id);
        return carDeal.price >= carFilters.minPrice && 
               carDeal.price <= carFilters.maxPrice && 
               carFilters.types.indexOf(carDeal.type)>-1 &&
               modelSearch(carDeal)
               ;
    });
}

export default filteredDeals;