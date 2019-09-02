import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class ProductBid extends Component {
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
                    View details of a single product and submit a bid for it using the form below.
                </div>
            )
        }
        else {
            return <Redirect to="/auth/signin" />
        }
    }
}

export default ProductBid;
