import React, { Component } from 'react'
//import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
//Import all auth-related components
import UserReg from './components/auth/UserReg';
import UserSignIn from './components/auth/UserSignIn';

//Import buyer-related components
import BuyerHome from './components/buyers/BuyerHome';
import BidView from './components/buyers/BidView';
import ProductList from './components/buyers/ProductList';
import ProductBid from './components/buyers/ProductBid';

//Import all seller-side components
import SellerHome from './components/sellers/SellerHome';
import BidBoard from './components/sellers/BidBoard';
import Inventory from './components/sellers/Inventory';
import NewProduct from './components/sellers/NewProduct';
import ProductDetail from './components/sellers/ProductDetail';
import UpdateProduct from './components/sellers/UpdateProduct';


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <header className="App-header">
                <Header />
              </header>
              <Route exact path="/" render = {props => (
                <Home />
              )}/>

              <Route path="/auth/register" component={UserReg}/>
              <Route path="/auth/signin" component={UserSignIn}/>
              
              <Route exact path="/buyers/:buyerLink" component={BuyerHome} />
              <Route path="/buyers/:buyerLink/bids" component={BidView} />
              <Route exact path="/products/" component={ProductList}/>
              <Route exact path="/products/:productLink" component={ ProductBid }/>

              <Route exact path="/sellers/:sellerLink" component={ SellerHome }/>
              <Route path="/sellers/:sellerLink/bidboard" component={BidBoard} />

              
              <Route exact path="/sellers/:sellerLink/inventory" component={Inventory} />
              <Route path="/sellers/:sellerLink/inventory/new" component={NewProduct} />
              <Route exact path="/sellers/:sellerLink/:productLink" component={ProductDetail} />
              <Route path="/sellers/:sellerLink/:productLink/update" component={UpdateProduct} />
              
        </div>
      </Router>
    );
  }
}



export default App;
