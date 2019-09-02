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
        this.getSellerDetails();
        this.getProductsBySeller();
        this.getBidsforSeller();
    }

    getSellerDetails(){
        SellerApi.getSeller('mbarry')
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

    getProductsBySeller(){
        ProductApi.getProductsBySeller('mbarry')
            .then(res => {
                this.setState({
                    sellerProducts: res.data
                }, ()=>{
                    console.log(`sellerProducts: ${this.state.sellerProducts}`);
                });
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
                    <p>First Name: {this.state.seller.first_name} </p>
                    <h4>About Seller</h4>
                    <p>{this.state.seller.about} </p>
                    <h4>List of Seller's Products</h4>

                </div>
                
            )
        }
        else {
            return <Redirect to="/auth/signin" />
        }
    }

}

export default SellerHome;
