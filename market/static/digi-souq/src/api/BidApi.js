import Axios from './BaseApi';

class BidApi {
    static getAllBids(){
        return Axios.get(`/bids/`);
    }
    static getBidsByBuyer(buyer_link){
        return Axios.get(`http://localhost:8000/api/bids/?buyer=${buyer_link}`);
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
