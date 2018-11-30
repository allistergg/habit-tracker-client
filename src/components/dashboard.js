import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import LandingPage from './landing-page';
import Days from './habits';
import weekHabits from './week-habits';
import EditHabit from './edit-habit';



export class Dashboard extends React.Component {

    render() {
        return (
            
            <div>
                <Link className="nav-link" to='/dashboard'>Days</Link>
                <Link className="nav-link" to='/dashboard/week'>Week</Link>
                <Link className="nav-link" to='/dashboard/edit'>Edit Habits</Link>
                <Route exact path="/dashboard" component={Days} />
                <Route path='/dashboard/week' component={weekHabits} />
                <Route path='/dashboard/edit' component={EditHabit} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // hasAuthToken: state.auth.authToken !== null,
    // loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(Dashboard));
