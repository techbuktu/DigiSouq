import React, { Component } from 'react';
import UserApi from '../../api/UserApi';

class UserSignIn extends Component {

    submitForm() {
        console.log("SignIn form submitted");
    }

    render() {
        return (
            <div>
                Sign in to Your DigiSouq account.
                <form onSubmit = {this.submitForm()}>
                    <div>
                        <label>
                            Username
                        </label>
                        <input type="text" name="username"/>
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input type="password" name="password"/>
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