import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';

class ProductBidDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            bids: []
        }

        this.acceptBid = this.acceptBid.bind(this);
    }

    componentDidMount(){
        this.getBidsforProduct();
    }

    getBidsforProduct(){
        let bidsOnProduct = [];
        this.props.productBid.product.bids.map((bid) => {
            let bidDetail = {};
            BidApi.getBidByFullUrl(bid)
                .then(bidResponse => {
                    bidDetail = bidResponse.data;
                    bidsOnProduct.push(bidDetail);
                    this.setState({}, ()=>{})
                    console.log(`New bidDetail: ${bidDetail.amount}; bidsOnProduct: ${bidsOnProduct.length}`);
                })
                .catch(err => console.log(`getBidByFullUrl() API Error: ${err}`));
        });
        this.setState({ bids: bidsOnProduct}, () => {
            console.log(`bidsOnProduct: ${this.state.bids.length}`);
        })
    }

    acceptBid(bid_id){
        let updatedBid = {};
        updatedBid["accepted"] = true;
        BidApi.updateBid(bid_id, updatedBid)
            .then(bidResponse => {
                console.log(`${bidResponse.data}`);
            })
            .catch(err => console.log(`${err}`))
            .finally(() => console.log(`BidApi.updateBid() done running...`));
    }
    
    render() {
        const {product, bids} = this.props.productBid;
        console.log(`# of bids for ${product.name}: ${product.bids.length}`);
        const bidsUI = this.state.bids.map(bid => {
            if(bid.accepted){
                return <p>
                {bid.amount} <button style={{color:'green'}}>Accepted</button>
                </p>
            } else {
                return (
                <p>
                    {bid.amount} <button onClick={this.acceptBid.bind(this, bid.pk)}>Accept Bid</button>
                </p>
                )
            }
        })
        return (
            <div>
               
                <h4>{product.name}: {product.price}</h4>
               <h5> # of Bids for this Product : {this.state.bids.length} </h5>
               
                {bidsUI}
                
            </div>
        )
    }
}

export default ProductBidDetail;