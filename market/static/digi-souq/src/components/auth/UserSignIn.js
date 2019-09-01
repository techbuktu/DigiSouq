import React, { Component } from 'react';
import UserApi from '../../api/UserApi';

class UserSignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            authJson: ''
        };

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.createAuthCreds();
        });
    }

    createAuthCreds(){
        const authCreds = {
            username: this.state.username,
            password: this.state.password
        }
        let authJson = JSON.stringify(authCreds);
        this.setState({
            authJson: authJson
        })
    }

    submitForm(e) {
        e.preventDefault();
        
        UserApi.getToken(this.state.authJson)
            .then(res => {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('userId', res.data.user_id);
                this.props.updateUser();
            })
            .catch(err => {
                console.log("UserApi.getToken() error: " + err);
            })
            .finally(() => {
                console.log("UserApi.getToken() ran ...");
                console.log(`this.props.is_authenticated: ${this.props.is_authenticated} and this.props.userId : ${this.props.userId};`);
            })
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