import Axios from './BaseApi';

class BidApi {


    static getBidsByBuyer(buyer_link){
        return Axios.get(`/bids/${buyer_link}`);
    }

    static placeBid(bid_obj){
        return Axios.post(`/bids/`, bid_obj);
    }
}

export default BidApi;
