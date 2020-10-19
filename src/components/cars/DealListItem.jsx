import React from 'react';
import {useHistory} from 'react-router-dom';

 const DealListItem = ({ id, brandname, model, price, currency, dealername, image}) =>{
    const history = useHistory();
     return (
    <div style = {{display:"flex", flexDirection:"row", gap:"50px", cursor:"pointer"}} onClick={() => history.push(`/cars/${id}`)}>
        <img src={require(`../../images/${image}`).default} alt="Deal_Image"/>
        <div>
        <h3>{brandname}</h3>
        <h4>{model}</h4>
        <p>{currency}  {price}</p>
        <p>{dealername}</p>
        </div>
    </div>
);
}

export default DealListItem;