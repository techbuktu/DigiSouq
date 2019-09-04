import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductApi from '../../api/ProductApi';


class UpdateProduct extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            updatedProductJson: "",
            productLink: '',
            updatedName: '',
            updatedPrice: '',
            udatedDesc: '',
            updatedQuantity: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        return;
    }

    onSubmit(e){
        return;
        this.createNewProduct();
    }

    updateProduct(){
        return;
    }
    
    render() {
        if(this.state.auth_token){
            return (
                <div>
                    Update the "{this.props.product.name}" Product
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>
                                Product Name
                            </label>
                                <input type="text" defaultValue="" name="name" onChange={this.onChange} placeHolder={this.props.product.name} />
                            </p>
                        <p>
                            <label>
                                Price
                            </label>
                            <input type="number" name="price" defaultValue="" onChange={this.onChange} placeHolder={this.props.product.price} />
                        </p>
                        <p>
                            <label>
                                Description
                            </label>
                            <textarea name="desc" defaultValue=""  placeHolder={this.props.product.desc} onChange={this.onChange} />
                        </p>
                        <button type="submit">Add Product</button>
                    </form>
                </div>
            )
            }
            else {
                return <Redirect to="/auth/signin" />
            }
    }
}

UpdateProduct.propTypes ={
    product: PropTypes.object.isRequired
}

export default UpdateProduct;