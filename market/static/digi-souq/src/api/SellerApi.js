import Axios from './BaseApi';

class SellerApi {
    constructor(){

    }

    static getAllSellers(){
        return Axios.get(`/sellers/`);
    }

    static getSeller(seller_link){
        return Axios.get(`/sellers/${seller_link}`);
    }

    static newSeller(seller_obj){
        return Axios.post(`/sellers/`, seller_obj);
    }

    static updateSeller(seller_link, updated_seller_obj){
        return Axios.patch(`/sellers/${seller_link}/`, updated_seller_obj);
    }


}


export default SellerApi;