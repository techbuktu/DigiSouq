import axios from 'axios';

class UserApi {
    constructor(){
        this.apiUrl = "localhost:8000/api/market/";
    }
    
    static newUser(user_obj){
        return axios.post("localhost:8000/api/market/users/", user_obj);
    }

    static getUser(pk){
        return axios.get(`${this.apiUrl}/${pk}`);
    }
}


export default UserApi;