import Axios from './BaseApi';


class UserApi {
    
    static newUser(user_obj){
        
        return Axios.post(`/users/`, user_obj);
    }

    static getUser(pk){
        return Axios.get(`/users/${pk}`);
    }
}


export default UserApi;