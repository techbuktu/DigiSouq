import axios from 'axios';

const auth_token = localStorage.getItem('auth_token');

const RequestHeaders = {
    'Access-Control-Allow-Origin': '*',
    //'AccessC-Control-Allow-Headers': '*',
    'content-type': 'application/json',
    'Authorization': `Token ${auth_token}`
}


const Axios = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: RequestHeaders,
    /*auth: {},
    transformRequest: [function(data, headers){ return data; }]
    */
})

export default Axios;