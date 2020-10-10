import React from 'react';

 const DealListItem = ({ id, brandname, model, price, currency, dealername}) => (
    <div>
        <h1>{brandname}</h1>
        <h2>{model}</h2>
        <h2>{currency}  {price}</h2>
        <h3>{dealername}</h3>
    </div>
);

export default DealListItem;