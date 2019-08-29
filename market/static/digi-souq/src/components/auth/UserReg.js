import React, { Component } from 'react';
import UserApi from '../../api/UserApi';
//import qs from 'qs';

class UserReg extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        UserApi.getUser(1)
            .then(res => { console.log(res)});
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.data
        });
        console.log("onChange() this.state:" + this.state);
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

        console.log("newUser.first_name obj: " + newUser.first_name);
        const UserJson = JSON.stringify(newUser);
        console.log(UserJson);

        const testUser = {
            first_name: 'Allison',
            last_name: 'Wondersome',
            username: 'nomadist',
            password: 'Secret123'
        }
        let testJson = JSON.stringify(testUser);

        console.log('testJson: '+ testJson);
        UserApi.newUser(testJson)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log("Error Message:" + err);
            })
            .finally(() => {
                console.log("UserApi.newUser() ran...");
            })

    }

    render() {
        return (
            <div>
                <h4> Create an Account </h4>
                <form onSubmit={this.onSubmit}>
                    <label>
                        First Name
                    </label>
                    <input type="text" name="first_name" onChange={this.OnChange} defaultValue={this.state.first_name} data={this.state.first_name} />
                    <br/>
                    <label>
                        Last Name
                    </label>
                    <input type="text" name="last_name" onChange={this.OnChange} data={this.state.last_name}  defaultValue={this.state.last_name} />
                    <br/>
                    <label>
                        Username 
                    </label>
                    <input type="text" name="username" onChange={this.OnChange} data={this.state.username}  defaultValue={this.state.username} />
                    <br/>
                    <label>
                        Password
                    </label>
                    <input type="password" name="password" onChange={this.OnChange} data={this.state.password}  defaultValue={this.state.password} />
                    <br/>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }
}

export default UserReg;
