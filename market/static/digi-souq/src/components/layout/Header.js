import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.logOut = this.logOut.bind(this);
    }

    logOut(){
        let auth_token = localStorage.getItem('auth_token');
        if(auth_token){
            localStorage.removeItem('auth_token');
        } 
    }
    render() {
        return (
            <div>
                <h4>DigiSouq: The Digital Marketplace</h4>
                <button> <Link to="/">Home</Link> </button>
                <button> <Link to="/auth/signin">Sign In</Link> </button>
                <button> <Link>Seller Home</Link> </button>
                <button> <Link>Buyer Home</Link> </button>
                <button onClick={this.logOut}>Logout</button>
            </div>
        )
    }
}

export default Header;