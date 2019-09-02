import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class NewProduct extends Component {
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
                    Add a New Product to Your Inventory.
                </div>
            )
            }
            else {
                return <Redirect to="/auth/signin" />
            }
    }
}

export default NewProduct;
