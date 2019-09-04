import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class UpdateProduct extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token
        }
    }

    
    render() {
        if(this.state.auth_token){
            return (
                <div>
                    Update the details of a Product
                    <form>
                        Name, Price, Description (textarea)
                    </form>
                </div>
            )
            }
            else {
                return <Redirect to="/auth/signin" />
            }
    }
}

export default UpdateProduct;