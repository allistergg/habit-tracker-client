import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form'

export function LandingPage(props) {
    
    if (props.loggedIn) {
        return <Redirect to="/dashboard/" />;
    }

    return (
        <div className="home">
            <p className="welcome">Welcome to the habit tracker. Register to begin.
                Add a habit from the Edit Habits page, and check off whether you have completed
                it for the day. See how many habits you have completed
                each day for the week.
            </p>
            <h2>Login</h2>
            <LoginForm />
            <Link className="login-link" to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    });

export default connect(mapStateToProps)(LandingPage);
