import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h4>DigiSouq: The Digital Marketplace</h4>
            <button> <Link to="/">Home</Link> </button>
            <button> <Link to="/auth/signin">Sign In</Link> </button>
            <button> <Link>Seller Home</Link> </button>
            <button> <Link>Buyer Home</Link> </button>
        </div>
    )
}

export default Header;
