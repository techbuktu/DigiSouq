import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';
import UpdateProduct from './UpdateProduct';

class ProductDetail extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            product: {},
            productLink: ''
        }

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    
    componentDidMount(){
        //Extract the sellerLink and productLink values from the Route params
        let sellerLink= this.props.match.params.sellerLink;
        let productLink = this.props.match.params.productLink;
        console.log(`sellerLink: ${sellerLink} and productLink: ${productLink}`);
        this.setState({
            sellerLink: sellerLink,
            productLink: productLink
        }, () => {
            this.getProduct();
        })

    }

    getProduct(){
        ProductApi.getSingleProduct(this.state.productLink)
                .then(res => {
                    this.setState({
                        product: res.data
                    })
                    console.log(`this.state.product: ${this.state.product}`);
                })
                .catch(err => {
                    console.log(`Product API Error: ${err}`);
                })
                .finally()
    }

    deleteProduct(e){
        ProductApi.deleteProduct(this.state.productLink)
            .then(response => {
                console.log(`deleteProduct() response: ${response}`);
                return (<Redirect to={`/sellers/${this.state.sellerLink}`}/>)
            })
            .catch(err => {
                console.log(`deleteProduct() error: ${err}`);
            })
            .finally()
    }
    
    render() {
        if(this.state.auth_token){
            return (
                <div>
                    <h4 style={{textAlign:'center'}}>{this.state.product.name}</h4>
                    <p>
                        {this.state.product.desc}
                    </p>
                    <p>
                        Price: ${this.state.product.price} 
                    </p>
                    <p>
                        Quantity: {this.state.product.quantity}
                    </p>
                    <button onClick={this.deleteProduct}>Delete this Product</button>
                    <UpdateProduct />
                </div>
            )
            }
            else {
                return <Redirect to="/auth/signin" />
            }
    }
}

export default ProductDetail;
