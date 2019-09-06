import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class ProductList extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            product_list: []
        }
    }

    componentWillMount(){
        this.getAllProducts();
    }

    getAllProducts(){
        ProductApi.getAllProducts()
            .then(response => {
                this.setState({
                    product_list: response.data
                }, () => {
                    console.log(`this.state.product_list from API: ${this.state.product_list}`);
                })
            })
            .catch()
            .finally()
    }
    
    render() {
        if(this.state.auth_token){
            return (
                <div>
                    <h4> Current Products on Auction</h4>
                    {this.state.product_list.map((product) => {
                       return (
                            <p> 
                                <Link to={`/products/${product.link}`}> {product.name} </Link>  |  ${product.price}
                            </p>
                            
                        )
                    })}
                </div>
            )
        }
        else {
            return <Redirect to="/auth/signin" />
        }
    }
}

export default ProductList;
