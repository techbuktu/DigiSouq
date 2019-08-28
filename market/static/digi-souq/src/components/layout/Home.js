import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <p>
                    DigiSouq is the premier souq (marketplace) of online auctions.
                </p>
                <p>
                    If this is your first time here, please, <Link to="/auth/register">create your account here.</Link>
                </p>
                <p>
                    To see a list of the products our sellers have available for bidding, please, see
                    the <Link to="/products">Products page</Link>
                </p>

            </div>
        )
    }
}


export default Home;
