import Axios from './BaseApi';

class BidApi {


    static getBidsByBuyer(buyer_link){
        return Axios.get(`/bids/?buyer=${buyer_link}`);
    }

    static placeBid(bid_obj){
        return Axios.post(`/bids/`, bid_obj);
    }

    getBidsforSeller(seller_link){
        return Axios.get(`/bids/?seller=${seller_link}`);
    }
}

export default BidApi;
