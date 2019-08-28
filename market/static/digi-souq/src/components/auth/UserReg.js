import React, { Component } from 'react';
import UserApi from '../../api/UserApi';

class UserReg extends Component {
    constructor(props){
        super(props);
        this.state = {
            newUser: {
                first_name: '',
                last_name: '',
                password: ''
            }
        }
    }

    register = ()=>{
        console.log("Form submitted");
    }
    
    render() {
        return (
            <div>
                <h4> Create an Account </h4>
                <form onSubmit={this.register()}>
                    <label>
                        First Name
                    </label>
                    <input type="text" name="first_name"/>
                    <br/>
                    <label>
                        Last Name
                    </label>
                    <input type="text" name="last_name"/>
                    <br/>
                    <label>
                        Password
                    </label>
                    <input type="password" name="password"/>
                    <br/>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }
}

export default UserReg;
