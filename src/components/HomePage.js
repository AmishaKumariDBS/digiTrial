import React from 'react';
import CarsDealsList from './cars/DealsList.jsx';
import CarFilters from './cars/DealsListFilters.jsx';

const HomePage = () => (
    <div >
        <h1>Home Page</h1> <br/>
        <div style = {{display:"flex", flexDirection:"row", gap:"50px"}}>
        <CarFilters />
        <CarsDealsList />
        </div>
    </div>
);

export default HomePage;