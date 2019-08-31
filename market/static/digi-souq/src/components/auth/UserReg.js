import React, { Component } from 'react';
import UserApi from '../../api/UserApi';
//import qs from 'qs';

class UserReg extends Component {
    constructor(props){
        super(props);
        this.state = {
            UserJson: '',
            first_name: '',
            last_name: '',
            username: '',
            password: ''
        };



        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount(){
        console.log(this.state);
        UserApi.getUser(1)
            .then(res => { console.log(res)});
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value }, () => {
            
            this.createNewUserObj();
        });
       
        
    }

    createNewUserObj(){
        const newUser = {
            first_name: this.state.first_name,
            last_name : this.state.last_name,
            username: this.state.username,
            password: this.state.password
        };

        console.log("newUser.last_name obj: " + newUser.last_name);
        const newUserJson = JSON.stringify(newUser);
        console.log("newUserJson obj: " + newUserJson);

        this.setState({
            UserJson: newUserJson
        })

        console.log('this.state.UserJson: ' + this.state.UserJson);
    }

    postNewUser(){

        UserApi.newUser(this.state.UserJson)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log("Error Message:" + err);
            })
            .finally(() => {
                console.log("UserApi.newUser() ran...");

            });


    }



    onSubmit(e){
        e.preventDefault();
        console.log("Form submitted");
        console.log("this.state.first_name:" + this.state.first_name);
        console.log("this.state.last_name:" + this.state.last_name);
        console.log("this.state.username:" + this.state.username);
        console.log("this.state.password:" + this.state.password);

        this.createNewUserObj();

        this.postNewUser();

    }

    render() {
        return (
            <div>
                <h4> Create an Account </h4>
                <form onSubmit={this.onSubmit}>
                    <label>
                        First Name
                    </label>
                    <input type="text" name="first_name" onChange={this.onChange} defaultValue={this.state.first_name} data={this.state.first_name} />
                    <br/>
                    <label>
                        Last Name
                    </label>
                    <input type="text" name="last_name" onChange={this.onChange} data={this.state.last_name}  defaultValue={this.state.last_name} />
                    <br/>
                    <label>
                        Username 
                    </label>
                    <input type="text" name="username" onChange={this.onChange} data={this.state.username}  defaultValue={this.state.username} />
                    <br/>
                    <label>
                        Password
                    </label>
                    <input type="password" name="password" onChange={this.onChange} data={this.state.password}  defaultValue={this.state.password} />
                    <br/>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }
}

export default UserReg;
