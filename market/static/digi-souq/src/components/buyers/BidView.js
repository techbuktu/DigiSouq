import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';

class BidView extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token
        }

    }


    render() {
        if(this.state.auth_token){
            return (
                <div>
                    View Asking Prices and Bid on a Product.
                </div>
            )
            }
            else {
                return <Redirect to="/auth/signin" />
            }
    }
}

export default BidView;