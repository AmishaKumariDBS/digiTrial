import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,  } from 'react-redux';
import configureStore from './store/configureStore.js'
import CarDealsList from './components/cars/DealsList.jsx';


const store = configureStore();
const jsx = (
    <Provider store={store}>
        <CarDealsList />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));

