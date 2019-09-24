import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';
import SellerApi from '../../api/SellerApi';
import ProductApi from '../../api/ProductApi';

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
        const productBids = [];
        ProductApi.getProductsBySeller(this.state.sellerLink)
            .then(productsResponse => {
                this.setState({sellerProducts: productsResponse.data}, () => {
                    console.log(`productsResponse: ${productsResponse}`);
                    console.log(`this.state.sellerProducts: ${this.state.sellerProducts.length}`);
                    this.state.sellerProducts.map(product => {
                        const productBid = {};
                        productBid["product"] = product;
                        productBid["bids"] = [];
                        productBids.push(productBid);
                        //this.getBidsforProductByFullUrl();
                        product.bids.map(bid => {
                            const bidDetail = {};
                            BidApi.getBidByFullUrl(bid)
                                .then(bidResponse => {
                                    productBid.bids.push(bidResponse);
                                })
                                .catch()
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
    
    getBidByFullUrl(bid_full_url){
        BidApi.getBidByFullUrl(bid_full_url)
            .then()
            .catch()
            .finally()
    }

    render() {
        if(this.state.auth_token){
            return (
                <div>
                    Seller view and accept bid for your Products.
                </div>
            )
        }
        else {
            return <Redirect to="/auth/signin" />
        }
    }
}

export default BidBoard;