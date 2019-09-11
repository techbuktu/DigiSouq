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
            products: [],
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
        let products = [];
        this.state.bidsByBuyer.map((bid) => {
            let bidProduct = {};
            bidProduct["bid"] = bid;
            ProductApi.getProductByFullUrl(bid.product)
                .then(res => { 
                    products.push(res.data);
                    bidProduct["product"] = res.data;
                    bidProducts.push(bidProduct);
                    this.setState({
                        products: products,
                        bidProducts: bidProducts
                    }, () => { 
                        console.log(`this.state.products: ${this.state.products}`);
                        console.log(`this.state.bidProducts: ${this.state.bidProducts}`);
                    });
                })
                .catch(err => console.log(`getBidProductsByFullUrls(): ${err}`))
                .finally()
        })
    }

    acceptedStyle(bidProduct){
        if(bidProduct.bid.accepted){
            return { backgroundColor: 'green', padding: '5%' }
        } else {
            return { backgroundColor: 'red', padding: '5%' }
        }
    };

    render() {
        if(this.state.auth_token && this.state.bidsByBuyer){
            return (
                <div>
                    <h4>BidView: Your List of Most Recent Bids</h4>
                        <table>
                            <th>
                                Product Name 
                            </th>
                            <th>
                                Original Price
                            </th>
                            <th>
                                Your Bid ($)
                            </th>
                            <th>
                                Accepted? 
                            </th>

                            {this.state.bidProducts.map((bidProduct) => {
                                return <React.Fragment>
                                    <tr>
                                        <td>
                                            <Link to={`/products/${bidProduct.product.link}`}> {bidProduct.product.name} </Link>
                                        </td>
                                        <td>
                                            ${bidProduct.product.price}
                                        </td>
                                        <td>
                                            ${bidProduct.bid.amount}
                                        </td>
                                        <td>
                                            <button style={this.acceptedStyle(bidProduct)}></button>
                                        </td>
                                        
                                    </tr>
                                </React.Fragment>
                            })}
                           
                        </table>
                    
                </div>
            )
            }
            else {
                return <Redirect to="/auth/signin" />
            }
    }
}

export default BidView;