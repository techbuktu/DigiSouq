import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';
import BuyerApi from '../../api/BuyerApi';

class BidView extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            buyer: {},
            bidsByBuyer: []
        }

    }


    componentDidMount(){
        this.getBuyer();
    }

    getBuyer(){
        BuyerApi.getBuyerDetails('this.buyer.link')
            .then(response => {
                this.setState({
                    buyer: response.data
                }, () => {
                    this.getBidsByBuyer();
                })
            })
            .catch(buyerError => {
                console.log(`getBuyer() API Error: ${buyerError}`);
            })
            .finally()
    }

    getBidsByBuyer(){
        BidApi.getBidsByBuyer(this.state.buyer.link)
            .then(bidsResponse => {
                this.setState({
                    bidsByBuyer: bidsResponse.data
                }, () => {
                    console.log(`this.bidsByBuyer: ${this.state.bidsByBuyer}`);
                })
            })
            .catch(apiError => {
                console.log(`getBidsByBuyer() API error: ${apiError}`);
            })
            .finally()
    }


    render() {
        if(this.state.auth_token){
            return (
                <div>
                    <h4>Bid View: Your List of Most Recent Bids</h4>
                </div>
            )
            }
            else {
                return <Redirect to="/auth/signin" />
            }
    }
}

export default BidView;