import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import ProductApi from '../../api/ProductApi';

class NewProduct extends Component {
    constructor(props){
        super(props);

        let token = localStorage.getItem('auth_token');
        this.state = {
            auth_token: token,
            newProductJson: '',
            name: '',
            price: '',
            desc: '',
            quantity: '',
            sellerLink: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        let sellerLink = this.props.match.params.sellerLink;
        this.setState({sellerLink: sellerLink}, () => {});

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.newProductObj();
        })
    }

    newProductObj(){
        let newProduct = {
            name: this.state.name,
            price: this.state.price,
            desc: this.state.desc,
            quantity: this.state.quantity,
            seller: "http://localhost:8000/api/sellers/mbarry/"
        };

        let newProductJson = JSON.stringify(newProduct);
        this.setState({ 
            newProductJson: newProductJson}, () => {
                console.log(`newProductJson: ${newProductJson}`);
            });
    }

    onSubmit(e){
        e.preventDefault();
        ProductApi.newProduct(this.newProductJson)
            .then(res => {
                if(res.data){
                    console.log(`newProduct() API Response: ${res.data}`);
                    return <Redirect to="/auth/signin" />
                }
            })
            .catch(err => {
                console.log(`newProduct() API Error: ${err}`);
            })
            .finally()
    }

    
    render() {
        if(this.state.auth_token){
            return (
                <div>
                    <h4> Add a New Product to Your Inventory </h4>

                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>
                                Product Name
                            </label>
                                <input type="text" defaultValue="" name="name" onChange={this.onChange} placeholder="Enter product name" />
                            </p>
                        <p>
                            <label>
                                Price
                            </label>
                            <input type="number" name="price" min="1" step="0.01" defaultValue="" onChange={this.onChange} placeholder="E.g 10 or 10.53" />
                        </p>
                        <p>
                            <label>
                                Description
                            </label>
                            <textarea name="desc" defaultValue=""  placeholder="Enter a description of what this product is or does" onChange={this.onChange} />
                        </p>
                        <p>
                            <label>
                                Quantity
                            </label>
                            <input type="number" min="0" name="quantity" defaultValue="" onChange={this.onChange} placeholder="How many pieces are available for sale?" />
                        </p>
                        <button type="submit">Add New Product</button>
                    </form>
                </div>
            )
            }
            else {
                return <Redirect to="/auth/signin" />
            }
    }
}

export default NewProduct;
