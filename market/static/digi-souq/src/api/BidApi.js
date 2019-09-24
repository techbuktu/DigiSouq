import Axios from './BaseApi';
import axios from 'axios';

const auth_token = localStorage.getItem('auth_token'); 

let RequestHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'content-type': 'application/json',
    'Authorization': `Token ${auth_token}`
}
const axiosInstance = axios.create({
    headers: RequestHeaders
});


class BidApi {
    static getAllBids(){
        return Axios.get(`/bids/`);
    }

    static getBidByUrl(bid_url){
        return Axios.get(`/bids/${bid_url}`);
    }

    static getBidByFullUrl(bid_full_url){
        return axiosInstance.get(`${bid_full_url}`);
    }
    
    static getBidsByBuyer(buyer_link){
        return Axios.get(`/bids/?buyer=${buyer_link}`);
    }


    static placeBid(bid_obj){
        return Axios.post(`/bids/`, bid_obj);
    }

    static getBidsforSeller(seller_link){
        return Axios.get(`/bids/?seller=${seller_link}`);
    }

    static updateBid(bid_link, updated_bid_obj){
        return Axios.patch(`/bids/`, updated_bid_obj);
    }
}

export default BidApi;
