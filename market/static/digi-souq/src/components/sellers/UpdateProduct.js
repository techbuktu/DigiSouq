import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class UpdateProduct extends Component {
    render() {
        return (
            <div>
                Update the details of a Product
            </div>
        )
    }
}

export default UpdateProduct;