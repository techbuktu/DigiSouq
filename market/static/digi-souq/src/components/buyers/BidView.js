import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';

class BidView extends Component {
    render() {
        return (
            <div>
                View Asking Prices and Bid on a Product.
            </div>
        )
    }
}

export default BidView;