import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/user';
import { login } from '../actions/auth';

export function RegistrationForm(props) {
    let usernameInput;
    let passwordInput;
    let passwordConfirmInput;
    const handleSubmit = (e) => {
        e.preventDefault()
        let username = usernameInput.value;
        let password = passwordInput.value;
        let passwordConfirm = passwordConfirmInput.value;
        let user = { username, password, passwordConfirm }
        return props.dispatch(registerUser(user))
            .then((res) => {
                console.log(res)
                props.dispatch(login(username, password))
            })

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
            <label htmlFor="username">Username</label>
            <input ref={input => (usernameInput = input)} type="text" id="username" name="username"></input>
            <label htmlFor="password">Password</label>
            <input ref={input => (passwordInput = input)} type="password" id="password" name="password"></input>
            <label htmlFor="password-confirm">Re-enter Password</label>
            <input ref={input => (passwordConfirmInput = input)} type="password" id="password-confirm" name="password-confirm"></input>
            
            <button className="nav-link login" type="submit">
                Register
            </button>
            <p>{props.error ? props.error.message : ''}</p>
        </form >
    )

}

export const mapStatetoProps = (state) => {
    console.log(state)
    return {
        error: state.auth.error
    }
}

export default connect(mapStatetoProps)(RegistrationForm);
