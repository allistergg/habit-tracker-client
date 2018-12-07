import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
            <p className="welcome">Welcome to the habit tracker. Register to begin.
                Add a habit from the Edit Habits page, and check off whether you have completed
                it for the day. See how many habits you have completed
                each day for the week.
            </p>
            <h2>Register</h2>
            <RegistrationForm />
            <Link className="login-link" to="/">Login</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    });

export default connect(mapStateToProps)(RegistrationPage);