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
            updatedDesc: '',
            updatedQuantity: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target
        }, () => {
            this.createProductJson();
        })
    }

    createProductJson(){
        let updatedProductJson = ""
        let updatedProdut = {
            name: this.state.updatedName,
            price: this.state.updatedPrice,
            quantity: this.state.updatedQuantity,
            desc: this.state.updatedDesc
        };
        updatedProductJson = JSON.stringify(updatedProdut);
        this.setState({ updatedProductJson: updatedProductJson });
    }

    onSubmit(e){
        e.preventDefault();
        ProductApi.updateProduct(this.props.product.link, this.state.updatedProductJson)
            .then(res => {
                console.log(`updateProduct() API response: ${res.data}`);
            })
            .catch(error => {
                console.log(`updatedProduct() API Error: ${error}`);
            })
            .finally()
    }
    
    render() {
        if(this.state.auth_token){
            return (
                <div>
                    <h5>Update the "{this.props.product.name}" Product </h5>

                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>
                                Product Name
                            </label>
                                <input type="text" defaultValue={this.props.product.name} name="name" onChange={this.onChange} placeholder={this.props.product.name} />
                            </p>
                        <p>
                            <label>
                                Price
                            </label>
                            <input type="number" name="price" min="0" step="0.01" defaultValue={this.props.product.price} onChange={this.onChange} placeholder={this.props.product.price} />
                        </p>
                        <p>
                            <label>
                                Description
                            </label>
                            <textarea name="desc" defaultValue={this.props.product.desc}  placeholder={this.props.product.desc} onChange={this.onChange} />
                        </p>
                        <p>
                            <label>
                                Quantity
                            </label>
                            <input type="number" min="0" name="quantity" defaultValue={this.props.product.quantity} onChange={this.onChange} placeholder={this.props.product.quantity} />
                        </p>
                        <button type="submit">Update Product</button>
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