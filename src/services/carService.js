import axios from 'axios';

const CARS_REST_API_URL = 'http://localhost:8080/cars';

export const getCarDeals =()=>{
        return axios.get(CARS_REST_API_URL);
}
