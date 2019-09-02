import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class ProductDetail extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token
        }
    }

    
    render() {
        return (
            <div>
                Deatils about a Product in this Seller's Inventory.
            </div>
        )
    }
}

export default ProductDetail;
