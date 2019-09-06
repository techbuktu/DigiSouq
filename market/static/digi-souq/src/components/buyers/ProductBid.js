import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class ProductBid extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            productLink: '',
            product: {},
            productBid : {}
        }

        this.onChange = this.onChange.bind(this);
        this.placeBid = this.placeBid.bind(this);
    }

    componentWillMount(){
        let product_link = this.props.match.params.productLink;
        this.setState({
            productLink: product_link
        }, () => {
            this.getProduct();
        })
        
    }

    getProduct(){
        ProductApi.getSingleProduct(this.state.productLink)
            .then(response => {
                this.setState({
                    product: response.data
                }, () => {
                    console.log(`getSingProduct() API Response: ${this.state.product}`);
                })
            })
            .catch(err => {
                console.log(`API error msg: ${err}`);
            })
            .finally()
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.createBidObject();
        })
    }

    createBidObject(){
        return;
    }

    placeBid(e){
        e.preventDefault();
        //POST Bid 
    }
    
    render() {
        if(this.state.auth_token){
            return (
                <div>
                    View details of a single product and submit a bid for it using the form below.
                </div>
            )
        }
        else {
            return <Redirect to="/auth/signin" />
        }
    }
}

export default ProductBid;
