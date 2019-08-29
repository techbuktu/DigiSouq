import axios from 'axios';

const RequestHeaders = {
    'Access-Control-Allow-Origin': '*',
    //'AccessC-Control-Allow-Headers': '*',
    'Content-Type': 'application/json',
}


const Axios = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: RequestHeaders
    /*auth: {},
    transformRequest: [function(data, headers){ return data; }]
    */
})

export default Axios;