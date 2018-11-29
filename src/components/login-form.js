import React from 'react';
import { connect } from 'react-redux';

export default function LoginForm(props) {
    return (
        <form className="login-form">
            <label htmlFor="username">Username</label>
            <input type="text" id="username"></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"></input>

            <button>
                Log in
            </button>
        </form >
    )
}