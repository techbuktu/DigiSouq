import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class Inventory extends Component {
    render() {
        return (
            <div>
                Inventory of Products by this Seller
            </div>
        )
    }
}

export default Inventory;