import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Habits from './components/habits';
import weekHabits from './components/week-habits';
import AddHabit from './components/add-habit';


export default class App extends React.Component {


    render() {

        return (
            <Router>
                <div>
                    <Link to='/'>Days</Link>
                    <Link to='/week'>Week</Link>
                    <Link to='/add'>Add Habit</Link>
                    <Route exact path='/' component={Habits} />
                    <Route path='/week' component={weekHabits} />
                    <Route path='/add' component={AddHabit}/>
                </div>
            </Router>
        )
    }



}

