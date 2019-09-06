import Axios from './BaseApi';

class BidApi {
    static getBidsByBuyer(buyer_link){
        return Axios.get(`/bids/?buyer=${buyer_link}/`);
    }

    static placeBid(bid_obj){
        return Axios.post(`/bids/`, bid_obj);
    }

    static getBidsforSeller(seller_link){
        return Axios.get(`/bids/?seller=${seller_link}/`);
    }

    static updateBid(bid_link, updated_bid_obj){
        return Axios.patch(`/bids/`, updated_bid_obj);
    }
}

export default BidApi;
