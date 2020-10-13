import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,  } from 'react-redux';
import configureStore from './store/configureStore.js'
import HomePage from './components/HomePage.js';
//import AppRouter from './routers/AppRouter.jsx';
//import {BrowserRouter, Switch} from "react-router-dom";
//import privatePath from "./privatePath";
//import publicPath from "./publicPath";
const store = configureStore();
const jsx = (
    <Provider store={store}>
        <HomePage />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));

