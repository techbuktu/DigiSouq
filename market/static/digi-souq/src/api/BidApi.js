import axios from 'axios';

class BidApi {
    static getBidsByBuyer(buyer_link){
        return axios.get(`localhost:8000/api/market/bids/${buyer_link}`);
    }

}

export default BidApi;
