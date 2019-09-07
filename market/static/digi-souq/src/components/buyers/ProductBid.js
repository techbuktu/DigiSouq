import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ProductApi from '../../api/ProductApi';
import BidApi from '../../api/BidApi';

class ProductBid extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            amount: '',
            productLink: '',
            fullProductLink: '',
            product: {},
            productBid : {},
            productBidJson: ''
        }

        this.onChange = this.onChange.bind(this);
        this.placeBid = this.placeBid.bind(this);
    }

    componentDidMount(){
        let product_link = this.props.match.params.productLink;
        this.setState({
            productLink: product_link,
            fullProductLink: `http://localhost:8000/api/products/${product_link}/`
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
        let productBid = {
            accepted: false,
            buyer: 'http://localhost:8000/api/buyers/myuser/',
            product: this.state.fullProductLink
        };
        this.setState({ [e.target.name]: e.target.value}, () => {
            productBid['amount'] = this.state.amount;
            console.log(`productBid Obj: ${productBid}`);
        });

        this.setState({
            productBid: productBid
        }, ()=>{
            console.log(`this.state.productBid: ${this.state.productBid}`);
            let productBidJson = JSON.stringify(this.state.productBid);
            this.setState({ productBidJson: productBidJson }, () => {
                console.log(`this.state.productBidJson: ${this.state.productBidJson}`);
            })
        })
    }

    placeBid(e){
        e.preventDefault();
        BidApi.placeBid(this.state.productBidJson)
            .then(bidResponse => {
                console.log(`placeBid Response: ${bidResponse.data}`);
            })
            .catch(err => {
                console.log(`placeBid() API error: ${err}`);
            })
            .finally()
    }
    
    render() {
        if(this.state.auth_token){
            return (
                <div>
                    Details: {this.state.product.name}
                    <form onSubmit={this.placeBid}>

                        <input type="number" min="1" step="0.01" name="amount" defaultValue="0" onChange={this.onChange}/>
                        <button type="submit">Place Bid</button>
                    </form>
                </div>
            )
        }
        else {
            return <Redirect to="/auth/signin" />
        }
    }
}

export default ProductBid;
