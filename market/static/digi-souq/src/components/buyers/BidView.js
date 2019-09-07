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
        let buyerLink = this.props.match.params.buyerLink;
        this.setState({
            buyerLink: buyerLink
        }, () => {
            this.getBuyer(this.state.buyerLink);
            //this.getBidsByBuyer(this.state.buyerLink);
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
                    console.log(`this.state.bidsByBuyer: ${this.state.bidsByBuyer[0]}`);
                })
            })
            .catch(apiError => {
                console.log(`getBidsByBuyer() API error: ${apiError}`);
            })
            .finally()
    }


    render() {
        if(this.state.auth_token && this.state.bidsByBuyer){
            return (
                <div>
                    <h4>BidView: Your List of Most Recent Bids</h4>
                    
                    {this.state.bidsByBuyer.map((bid) => {
                        return(
                            <p key={bid.pk}>
                                Product: {bid.product} Bid Amount: ${bid.amount}
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