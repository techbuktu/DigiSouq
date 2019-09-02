import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class ProductList extends Component {
    render() {
        return (
            <div>
                List of Products for Buyer to view and bid on.
            </div>
        )
    }
}

export default ProductList;
