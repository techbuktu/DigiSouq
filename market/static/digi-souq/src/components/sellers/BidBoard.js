import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import BidApi from '../../api/BidApi';

class BidBoard extends Component {
    render() {
        return (
            <div>
                Seller view and accept bid for your Products.
            </div>
        )
    }
}

export default BidBoard;