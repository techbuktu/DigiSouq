import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom';
import BuyerApi from '../../api/BuyerApi';
import UserApi from '../../api/UserApi';

class BuyerHome extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            buyerLink: '',
            buyer: {},
            buyerConfirmed: false,
            unauth_message: ''
        }
    }

    componentDidMount(){
        let buyerLink = this.props.match.params.buyerLink;
        this.setState({ buyerLink: buyerLink })
        this.getMatchingUser(buyerLink);
    }
    
    getMatchingUser(buyer_link){
        let userId = localStorage.getItem('userId');
        UserApi.getUser(userId)
            .then(res => {
                if(res.data.username === buyer_link){
                    this.setState({
                        buyerConfirmed: true }, () => { console.log(`this.state.buyerConfirmed: ${this.state.buyerConfirmed}`);})
                }
                else{
                    return <Redirect to="/auth/signin"/>
                }
            })
            .catch(err => {
                this.setState({
                    unauth_message: `Sorry, you are not authorized to view this page.
                    Please, sign in using the menu on the nav bar to see any bids you have placed.`
                }, () => {})
            })
            .finally()
    }

    render() {
        if(this.state.auth_token && this.state.buyerConfirmed){
            return (
                <div>
                    <p>
                        Hi {this.state.buyerLink}, please, go to your <Link to={`/${this.state.buyerLink}/bids`}> BidView </Link>
                        to see the list of bids you have placed on products so far.
                    </p>
                    <p>
                        To shop around for more products to bid on, head over to the <Link to={'/products'}>Products Showcase</Link>
                    </p>
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    {this.state.unauth_message}
                </React.Fragment>
            )
        }

    }
}

export default BuyerHome;