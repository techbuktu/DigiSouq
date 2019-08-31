import Axios from './BaseApi';


class UserApi {
    constructor(){
        
    }
    
    static newUser(user_obj){
        
        return Axios.post(`/users/`, user_obj);
    }

    static getUser(pk){
        return Axios.get(`/users/${pk}`);
    }

    static getToken(user_obj){
        return Axios.post('/auth-token/', user_obj);
    }
}


export default UserApi;