import Axios from './BaseApi';

class BuyerApi {
    constructor(){}

    static getBuyerDetails(buyer_link){
        return Axios.get(`/buyers/${buyer_link}/`);
    }

    static newBuyer(buyer_obj){
        return Axios.post(`/buyers/`, buyer_obj);
    }

    static updateBuyer(buyer_link, updated_buyer_obj){
        return Axios.put(`/buyers/${buyer_link}/`, updated_buyer_obj);
    }

    static getAllBuyers(){
        return Axios.get(`/buyers/`);
    }
}


export default BuyerApi;