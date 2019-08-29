import React, { Component } from 'react';
import UserApi from '../../api/UserApi';

class UserReg extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: ''
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        UserApi.getUser(1)
            .then(res => { console.log(res)});
    }

    onSubmit(e){
        e.preventDefault();
        console.log("Form submitted");
        console.log("this.state:" + this.state);
        const newUser = {
            first_name: this.state.first_name,
            last_name : this.state.last_name,
            username: this.state.username,
            password: this.state.password
        }

        UserApi.newUser(newUser)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log("UserApi.newUser() ran...");
            })

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log("this.state:" + this.state);
    }

    render() {
        return (
            <div>
                <h4> Create an Account </h4>
                <form onSubmit={this.onSubmit}>
                    <label>
                        First Name
                    </label>
                    <input type="text" name="first_name" onChange={this.OnChange} defaultValue={ this.state.first_name } />
                    <br/>
                    <label>
                        Last Name
                    </label>
                    <input type="text" name="last_name" onChange={this.OnChange} defaultValue={ this.state.last_name } />
                    <br/>
                    <label>
                        Username 
                    </label>
                    <input type="text" name="username" onChange={this.OnChange} defaultValue={ this.state.username } />
                    <br/>
                    <label>
                        Password
                    </label>
                    <input type="password" name="password" onChange={this.OnChange} defaultValue={ this.state.password } />
                    <br/>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }
}

export default UserReg;
