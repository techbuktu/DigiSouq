import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class NewProduct extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            updatedProductJson: "",
            productLink: '',
            name: '',
            price: '',
            desc: '',
            quantity: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        return;
    }

    newProductObj(product_obj){
        return;
        this.setState({ updatedProductJson: ''}, () => {})
    }

    onSubmit(e){
        //ProductApi.newProduct(this.updatedProductJson)
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
