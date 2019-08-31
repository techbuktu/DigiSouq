import React, { Component } from 'react';
import UserApi from '../../api/UserApi';

class UserSignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    submitForm() {
        console.log("SignIn form submitted");
    }

    render() {
        return (
            <div>
                Sign in to Your DigiSouq account.
                <form onSubmit = {this.submitForm}>
                    <div>
                        <label>
                            Username
                        </label>
                        <input type="text" name="username" defaultValue="" onChange={this.onChange}/>
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input type="password" name="password" defaultValue="" onChange={this.onChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Sign In"/>
                    </div>
                </form>
            </div>
        )
    }

};

export default UserSignIn;