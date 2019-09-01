import Axios from './BaseApi';
import axios from 'axios';


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
        let RequestHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'content-type': 'application/json',
        }
       const instance = axios.create({
        baseURL: 'http://localhost:8000/api',
        headers: RequestHeaders
        })

        return instance.post(`/users/`, user_obj);
    }
}


export default UserApi;