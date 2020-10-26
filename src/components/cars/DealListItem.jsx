import React from 'react';
import {useHistory} from 'react-router-dom';


 const DealListItem = ({ id, brand_name, car_name, price, dealer_name, image}) =>{
    const history = useHistory();

     return (
    <div style = {{display:"flex", flexDirection:"row", gap:"50px", cursor:"pointer"}} onClick={() => history.push(`/cars/${id}`)}>
        <img src={require(`../../images/${image}`).default} alt="Deal_Image"/>
        <div>
        <h3>{brand_name}</h3>
        <h3>{car_name}</h3>
        <p>INR  {price}</p>
        <p>{dealer_name}</p>
        </div>
    </div>
);
}

export default DealListItem;