import axios from 'axios';
import * as types from '../actions/users';
import {login} from '../components/Auth.js';
const USERS_REST_API_PREFIX = 'http://localhost:8080/customers/';

export const appMiddleware = ({dispatch}) => next => action => {
    next(action);
    if(action.type===types.LOGIN_USER){
        const url = USERS_REST_API_PREFIX + action.payload.clientId;
        axios.get(url).then((response)=>{
            console.log(response.data);
            login(response.data);
            alert(`Welcome ${response.data.customerId}`);
            window.location.reload(false);
            dispatch({type:types.LOGIN_USER_SUCCESS,data:response.data})})
    .catch(error => {
        alert("Invalid Customer ID");
        //console.log(error);
        //dispatch({type:types.LOGIN_USER_ERROR,error:error.response.data}) 
    })}
};
