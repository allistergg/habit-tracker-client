import React from 'react';
import { Route, Link } from 'react-router-dom';
import Habits from './components/habits';
import weekHabits from './components/week-habits';
import EditHabit from './components/edit-habit';


export default class Dashboard extends React.Component {


    render() {

        return (
            
                <div>
                    <Link className="nav-link" to='/'>Days</Link>
                    <Link className="nav-link" to='/week'>Week</Link>
                    <Link className="nav-link" to='/edit'>Edit Habits</Link>
                    <Route exact path='/dashboard' component={Habits} />
                    <Route path='/week' component={weekHabits} />
                    <Route path='/edit' component={EditHabit} />
                </div>
            
        )
    }



}

