import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';

class BidBoard extends Component {
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