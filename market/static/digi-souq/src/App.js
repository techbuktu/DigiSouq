import React, { Component } from 'react'
import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
//Import all auth-related components
import UserReg from './components/auth/UserReg';
import UserSignIn from './components/auth/UserSignIn';

//Import buyer-related components
import BidView from './components/buyers/BidView';
import ProductList from './components/buyers/ProductList';

//Import all seller-side components
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

              <Route path="/auth/user-reg" component={UserReg}/>
              <Route path="/auth/signin" component={UserSignIn}/>
              
              <Route path="/buyer/:buyerLink" component={Buyer}/>

        </div>
      </Router>
    );
  }
}



export default App;
