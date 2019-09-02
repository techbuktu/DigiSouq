import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class ProductBid extends Component {
    render() {
        return (
            <div>
                View details of a single product and submit a bid for it using the form below.
            </div>
        )
    }
}

export default ProductBid;
