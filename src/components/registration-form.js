import React from 'react';
import { connect } from 'react-redux';
import {registerUser} from '../actions/user';
import {login} from '../actions/auth';

export function LoginForm(props) {
    let usernameInput;
    let passwordInput;
    const handleSubmit = (e) => {
        e.preventDefault()
        let username = usernameInput.value;
        let password = passwordInput.value;
        let user = {username, password}
        return props.dispatch(registerUser(user))
        .then(() => props.dispatch(login(username, password)))
        
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}className="login-form">
            <label htmlFor="username">Username</label>
            <input ref={input => (usernameInput = input)}type="text" id="username" name="username"></input>
            <label htmlFor="password">Password</label>
            <input ref={input => (passwordInput = input)}type="password" id="password" name="password"></input>

            <button className="nav-link login" type="submit">
                Register
            </button>
        </form >
    )
    
}

    export const mapStatetoProps = (state) => {
        console.log(state)
        return {
            
        }
    }

    export default connect(mapStatetoProps)(LoginForm);
