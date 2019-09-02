import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';
import BidApi from '../../api/BidApi';
import SellerApi from '../../api/SellerApi';

class SellerHome extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            sellerLink: '',
            seller: {},
            bidsforSeller: [],
            sellerProducts: []
        }
    }

    componentDidMount(){
        //console.log(`this.state.auth_token: ${this.state.auth_token}`);
        let sellerLink = this.props.match.params.sellerLink;
        console.log(sellerLink);
        this.setState({
            sellerLink: sellerLink
        }, () => {
            this.getSellerDetails(this.state.sellerLink);
            this.getProductsBySeller(this.state.sellerLink);
        });

        
        this.getBidsforSeller();
    }

    getSellerDetails(seller_link){
        SellerApi.getSeller(seller_link)
            .then(res => {
                this.setState({
                    seller: res.data
                }, () => {
                    console.log(`seller: ${this.state.seller}`);
                })
            })
            .catch(err => console.log(err))
            .finally()
    }

    getProductsBySeller(seller_link){
        ProductApi.getProductsBySeller(seller_link)
            .then(res => {
                this.setState({
                    sellerProducts: res.data
                }, 
                ()=> console.log(`sellerProducts from API: ${this.state.sellerProducts}`))
            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }

    getBidsforSeller(){
        BidApi.getBidsforSeller('mbarry')
            .then(res => {
                this.setState({
                    bidsforSeller: res.data
                }, () => {
                    console.log(`bidsfrSeller: ${this.state.bidsforSeller}`);
                })
            })
            .catch(err => {
                console.log(err);
            })
            .finally()
    }

    render() {
        if(this.state.auth_token){
            return (
                <div>
                    
                    <h4>About this Seller</h4>
                    <p>{this.state.seller.link}: {this.state.seller.about} </p>
                    <h4>List of Seller's Products</h4>

                    {this.state.sellerProducts.map((product) => {
                        return (
                        <p> 
                            <Link to={`/sellers/${this.state.sellerLink}/${product.link}`}> {product.name} </Link>
                            Price: $$ {product.price} <strong>Quantity</strong>: {product.quantity} 
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

export default SellerHome;
