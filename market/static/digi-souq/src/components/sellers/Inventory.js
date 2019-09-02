import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class Inventory extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            inventoryList: []
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    componentDidMount(){
        this.getInventoryList();
    }
    
    onChange(e){
        return;
    }

    onSubmit(e){
        return;
    }

    addProduct(productJson){
        return;
    }

    getInventoryList(){
        return;
    }

    acceptBid(bidId){
        return;
    }
    render() {
        if(this.state.auth_token){
            return (
                <div>
                    Inventory of Products by this Seller
                </div>
            )
        }
        else {
            return <Redirect to="/auth/signin" />
        }
    }
}

export default Inventory;