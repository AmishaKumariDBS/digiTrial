import React from 'react';

 const DealListItem = ({ id, brandname, model, price, currency, dealername, image}) => (
    <div style = {{display:"flex", flexDirection:"row", gap:"50px"}}>
        <img src={image} alt="Deal_Image"/>
        <div>
        <h3>{brandname}</h3>
        <h4>{model}</h4>
        <p>{currency}  {price}</p>
        <p>{dealername}</p>
        </div>
    </div>
);

export default DealListItem;