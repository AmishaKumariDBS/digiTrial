import React from 'react';

const CarDealDetails = (props) => {
    return (
        <div>
            <p>{props.match.params.id}</p>
        </div>
    );
}

export default CarDealDetails;