import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';
import SellerApi from '../../api/SellerApi';
import ProductApi from '../../api/ProductApi';

import ProductBidDetail from '../sellers/ProductBidDetail';

class BidBoard extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            seller: {},
            productBids : [],
            sellerProducts: [],
            sellerLink: ''
        }
    }

    componentDidMount(){
        let sellerLink = this.props.match.params.sellerLink;
        this.setState({ sellerLink: sellerLink}, () => {
            this.getSellerInfo(this.state.sellerLink);
        })
    }

    getSellerInfo(sellerLink){
        SellerApi.getSeller(sellerLink)
            .then(response => {
                this.setState({seller: response.data}, () => {
                    console.log(`this.state.seller: ${this.state.seller.link}`);
                    this.getProductsBySeller();
                })
            })
            .catch(err => {
                console.log(`getSeller() API Error: ${err}`);
            })
            .finally()
    }

    getProductsBySeller(){
        let productBids = [];
        ProductApi.getProductsBySeller(this.state.sellerLink)
            .then(productsResponse => {
                this.setState({sellerProducts: productsResponse.data}, () => {
                    console.log(`productsResponse: ${productsResponse}`);
                    console.log(`this.state.sellerProducts: ${this.state.sellerProducts.length}`);
                    this.state.sellerProducts.map(product => {
                        let productBid = {};
                        productBid["product"] = product;
                        productBid["bids"] = [];

                        product.bids.map(bid => {
                            let bidDetail = {};
                            BidApi.getBidByFullUrl(bid)
                                .then(bidResponse => {
                                    bidDetail = bidResponse.data;
                                    productBid.bids.push(bidDetail);
                                    console.log(`New bidDetail: ${bidDetail.amount}; ${productBid.bids.length}`);
                                })
                                .catch(err => console.log(`getBidByFullUrl() API Error: ${err}`));
                        });
                        productBids.push(productBid);
                        this.setState({ productBids: productBids }, () => {
                            console.log(`this.state.productBids.length: ${this.state.productBids.length}`);
                        });
                    })
                });
            })
            .catch()
            .finally()
    }

    render() {
        if(this.state.auth_token && this.state.productBids){
            return (
                <div>
                    Seller view and accept bid for your Products.
                    {this.state.productBids.map(productBid => {
                        return <ProductBidDetail key={productBid.product.link} productBid={productBid}/>
                    })}
                </div>

            )
        }
        else {
            return <Redirect to="/auth/signin" />
        }
    }
}

export default BidBoard;