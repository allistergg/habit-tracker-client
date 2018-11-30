import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import LandingPage from './components/landing-page';
import Dashboard from './components/dashboard';
import RegistrationPage from './components/registration-page';



export class App extends React.Component {

    render() {
        return (
            
            <div>
                <Route exact path="/" component={LandingPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // hasAuthToken: state.auth.authToken !== null,
    // loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
