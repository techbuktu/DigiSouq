import React, { Component } from 'react'
import './App.css';
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

  state = {
    userId: '',
    is_authenticated: false
  }

  updateUser(){
    //Check if the user Auth token exists
    const auth_token = localStorage.getItem('auth_token');
    const userId = localStorage.getItem('userId');
    if(auth_token.length > 1){
      this.setState({
        is_authenticated: true,
        userId: userId
      })
    }
    else{
      console.log('User is not authenticated.');
      // redirect to UserSignIn component to get the auth token
      // <Route path="/auth/register" component={UserReg}/>
    }

  }
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

              <Route path="/auth/register" render={props => 
              (<UserReg {...props} 
                userId={this.state.userId} 
                is_authenticated={this.state.is_authenticated} 
                updateUser={this.updateUser}/>)} 
              />

              <Route path="/auth/signin" 
              render={props => 
                (<UserSignIn {...props} 
                  userId={this.state.userId} 
                  is_authenticated={this.state.is_authenticated} 
                  updateUser={this.updateUser}/>)} 
              />
              
              <Route exact path="/buyers/:buyerLink" 
                render={props => 
                  (<BuyerHome {...props} 
                    userId={this.state.userId} 
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)} 
              />
              <Route path="/buyers/:buyerLink/bids" 
                render={props => 
                  (<BidView {...props} 
                    userId={this.state.userId} 
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)} 
              />
              <Route exact path="/products/" 
                render={props => 
                  (<ProductList {...props} 
                    userId={this.state.userId} 
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)} 
              />
              <Route exact path="/products/:productLink" 
                render={props => 
                  (<ProductBid {...props} 
                    userId={this.state.userId} 
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)} 
              />

              <Route exact path="/sellers/:sellerLink" 
                render={props => 
                  (<SellerHome {...props} 
                    userId={this.state.userId} 
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)} 
              />
              <Route path="/sellers/:sellerLink/bidboard" 
                render={props => 
                  (<BidBoard {...props} 
                    userId={this.state.userId} 
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)}  
              />

              
              <Route exact path="/sellers/:sellerLink/inventory" 
                render={props => 
                  (<Inventory {...props} 
                    userId={this.state.userId} 
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)}   
              />
              <Route path="/sellers/:sellerLink/inventory/new" 
                render={props => 
                  (<NewProduct {...props} 
                    userId={this.state.userId} 
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)} 
              />

              <Route exact path="/sellers/:sellerLink/:productLink" 
                render={props => 
                  (<ProductDetail {...props} 
                    userId={this.state.userId} 
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)} 
              />
              <Route path="/sellers/:sellerLink/:productLink/update" 
                render={props => 
                  (<UpdateProduct {...props}
                    userId={this.state.userId}
                    is_authenticated={this.state.is_authenticated} 
                    updateUser={this.updateUser}/>)} 
              />
              
        </div>
      </Router>
    );
  }
}



export default App;
