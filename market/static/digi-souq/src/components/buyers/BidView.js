import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';
import BuyerApi from '../../api/BuyerApi';
import ProductApi from '../../api/ProductApi';

class BidView extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            buyer: {},
            bidsByBuyer: [],
            bidProducts: []
        }

    }


    componentDidMount(){
        let buyerLink = this.props.match.params.buyerLink;
        this.setState({
            buyerLink: buyerLink
        }, () => {
            this.getBuyer(this.state.buyerLink);
            //this.getBidProductsByFullUrls();
        })
        //this.getBuyer(buyerLink);
        
    }

    getBuyer(buyer_link){
        BuyerApi.getBuyerDetails(buyer_link)
            .then(response => {
                this.setState({
                    buyer: response.data
                }, () => {
                    console.log(`this.state.buyer: ${this.state.buyer.link}`);
                    this.getBidsByBuyer();
                })
            })
            .catch(buyerError => {
                console.log(`getBuyer() API Error: ${buyerError}`);
            })
            .finally()
    }

    getBidsByBuyer(){
        //BidApi.getAllBids() getBidsByBuyer
        BidApi.getBidsByBuyer(this.state.buyerLink)
            .then(bidsResponse => {
                this.setState({
                    bidsByBuyer: bidsResponse.data
                }, () => {
                    console.log(`this.state.bidsByBuyer: ${this.state.bidsByBuyer}`);
                    this.getBidProductsByFullUrls();
                })
            })
            .catch(apiError => {
                console.log(`getBidsByBuyer() API error: ${apiError}`);
            })
            .finally()
    }

    getBidProductsByFullUrls(){
        let bidProducts = [];
        this.state.bidsByBuyer.map((product_bid) => {
            ProductApi.getProductByFullUrl(product_bid.product)
                .then(res => { 
                    bidProducts.push(res.data);
                    this.setState({
                        bidProducts: bidProducts
                    }, () => { console.log(`this.state.bidProducts: ${this.state.bidProducts}`)});
                })
                .catch(err => console.log(`getBidProductsByFullUrls(): ${err}`))
                .finally()
        })
    }


    render() {
        if(this.state.auth_token && this.state.bidsByBuyer){
            return (
                <div>
                    <h4>BidView: Your List of Most Recent Bids</h4>
                    
                    {this.state.bidProducts.map((product) => {
                        return(
                            <p key={product.link}>
                                Product: {product.name} Bid Amount: ${product.price}
                            </p>
                        )
                    })}
                </div>
            )
            }
            else {
                return <Redirect to="/auth/signin" />
            }
    }
}

export default BidView;