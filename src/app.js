import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Habits from './components/habits';
import weekHabits from './components/week-habits';
import AddHabit from './components/add-habit';
import EditHabit from './components/edit-habit';


export default class App extends React.Component {


    render() {

        return (
            <Router>
                <nav>
                    <Link className="nav-link" to='/'>Days</Link>
                    <Link className="nav-link" to='/week'>Week</Link>
                    <Link className="nav-link" to='/add'>Add Habit</Link>
                    <Link className="nav-link" to='/edit'>Edit Habits</Link>
                    <Route exact path='/' component={Habits} />
                    <Route path='/week' component={weekHabits} />
                    <Route path='/add' component={AddHabit}/>
                    <Route path='/edit' component={EditHabit} />
                </nav>
            </Router>
        )
    }



}

