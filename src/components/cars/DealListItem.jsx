import React from 'react';

 const DealListItem = ({ id,name, price, currency, dealername}) => (
    <div>
        <h1>{name}</h1>
        <h2>{currency}  {price}</h2>
        <h3>{dealername}</h3>
    </div>
);

export default DealListItem;