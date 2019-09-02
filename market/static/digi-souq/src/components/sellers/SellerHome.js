import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';

class SellerHome extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token
        }
    }

    componentDidMount(){
        //console.log(`this.state.auth_token: ${this.state.auth_token}`);
        this.getSellerDetails();
        this.getProductsBySeller();
    }

    getSellerDetails(){
        return;
    }

    getProductsBySeller(){
        return;
    }

    render() {
        if(this.state.auth_token){
            return (
                <div>
                    <h4>Seller Details</h4>

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
