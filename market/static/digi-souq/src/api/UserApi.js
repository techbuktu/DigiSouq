import Axios from './BaseApi';
import axios from 'axios';

let RequestHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'content-type': 'application/json',
}
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: RequestHeaders
})


class UserApi {
    constructor(){
        
    }
    
    static getUser(pk){
        return Axios.get(`/users/${pk}`);
    }

    static getToken(user_obj){
        console.log(Axios);
        return Axios.post('/auth-token/', user_obj);
    }

    static newUser(user_obj){

        return axiosInstance.post(`/users/`, user_obj);
    }
}


export default UserApi;