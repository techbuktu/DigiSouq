import Axios from './BaseApi';

class BidApi {
    static getBidsByBuyer(buyer_link){
        return Axios.get(`/bids/${buyer_link}`);
    }

}

export default BidApi;
