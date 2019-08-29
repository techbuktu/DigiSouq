import axios from 'axios';
import Axios from './BaseApi';


class UserApi {
    constructor(){
        this.apiUrl = "localhost:8000/api/";

        this.axios = Axios;
    }
    
    static newUser(user_obj){
        
        return Axios.post(`/users/`, user_obj);
    }

    static getUser(pk){
        return Axios.get(`/users/${pk}`);
        //return axios.get(`${this.apiUrl}/${pk}`);
    }
}


export default UserApi;