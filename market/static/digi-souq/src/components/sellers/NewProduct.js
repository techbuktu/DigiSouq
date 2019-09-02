import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class NewProduct extends Component {
    render() {
        return (
            <div>
                Add a New Product to Your Inventory.
            </div>
        )
    }
}

export default NewProduct;
