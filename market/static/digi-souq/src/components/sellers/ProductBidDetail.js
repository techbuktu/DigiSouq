import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';

class ProductBidDetail extends Component {
    constructor(props){
        super(props);
    }

    acceptBid(bid_id){
        let updatedBid = {};
        updatedBid["accepted"] = true;
        BidApi.placeBid(bid_id, updatedBid)
            .then(bidResponse => {
                console.log(`${bidResponse.data}`);
            })
            .catch(err => console.log(`${err}`))
            .finally(() => console.log(`BidApi.placeBid() done running...`));
    }
    render() {
        const {product, bids} = this.props.productBid;
        console.log(`# of bids for ${product.name}: ${bids.length}`);
        const bidsUI = bids.map(bid => {
            return <span>{bid.amount}</span>
        })
        return (
            <div>
               
                <h4>{product.name}: {product.price}</h4>
                # of Bids for this Product : {bids.length}
                {bids.map(bid => {
                    return (
                        <React.Fragment>
                            Hello
                        </React.Fragment>
                        )
                })}
                
            </div>
        )
    }
}

export default ProductBidDetail;