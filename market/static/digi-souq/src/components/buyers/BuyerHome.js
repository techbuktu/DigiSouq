import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom';
import BuyerApi from '../../api/BuyerApi';

class BuyerHome extends Component {
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
                    Buyer landing page.
                </div>
            )
        }
        else {
            return <Redirect to="/auth/signin" />
        }

    }
}

export default BuyerHome;